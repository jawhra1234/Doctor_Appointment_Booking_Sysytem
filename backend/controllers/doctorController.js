import doctorModel from "../models/doctorModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import appointmentModel from "../models/appointmentModel.js";
import crypto from "crypto"

const changeAvailability = async (req,res)=>{
     try{
       
       const {docId} = req.body

       const docData = await doctorModel.findById(docId)
       await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
       res.json({success:true,message:'Availability Changed'})

     } catch(error){
       console.log(error)
       res.json({success:false,message:error.message})
     }
}

const doctorList = async (req,res)=>{
  try{
    const doctors= await doctorModel.find({}).select(['-password','-email'])

    res.json({success:true,doctors})

  } catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

//API for doctor login
const loginDoctor = async (req,res)=>{
  try{
    
console.log("🔴 ACTIVE DB:", mongoose.connection.db.databaseName);
    const {email,password} = req.body
    const doctor = await doctorModel.findOne({email})
    console.log("🔴 ANY DOCTOR IN DB:", doctor);
    console.log("EMAIL FROM REQUEST:", email);
console.log("PASSWORD FROM REQUEST:", password);
console.log("DOCTOR FOUND:", doctor);

if (doctor) {
  console.log("STORED HASH:", doctor.password);
  const isMatch = await bcrypt.compare(password, doctor.password);
  console.log("PASSWORD MATCH:", isMatch);
}
console.log("MODEL COLLECTION:", doctorModel.collection.name)

    if(!doctor){
      return res.json({success:false,message:'Invalid Credentials'})
    }
    
    const isMatch = await bcrypt.compare(password,doctor.password)
    if(isMatch){

      const token = jwt.sign({id:doctor._id},process.env.JWT_SECRET)
      res.json({success:true,token})

    } else{
      res.json({success:false,message:'Invalid Credentials'})
    }
  } catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}



// API to get doctor appointments for doctor panel
const appointmentsDoctor = async (req,res)=>{
  try{
    console.log("REQ DOC ID:", req.docId)
    console.log("REQ DOC ID TYPE:", typeof req.docId)
    const docId = req.docId.toString()
    console.log("QUERY DOC ID:", docId)
    const appointments = await appointmentModel.find({docId})
    console.log("FOUND APPOINTMENTS:", appointments)
    res.json({success:true,appointments})

  } catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }
}

//API to mark appointment as completed or cancelled by doctor 
const appointmentComplete = async (req,res)=>{
   try{
      
      const doctorId = req.docId   // from JWT
      const { appointmentId, status } = req.body

      const appointmentData = await appointmentModel.findById(appointmentId)
      if(appointmentData && appointmentData.docId.toString() === doctorId){
         await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
         return res.json({success:true,message:'Appointment Completed'})
      } else{
         return res.json({success:false,message:'Mark Failed'})
      }

   } catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
   }
}
//API to cancel
const appointmentCancel = async (req,res)=>{
   try{
      
      const doctorId = req.docId   // from JWT
      const { appointmentId} = req.body

      const appointmentData = await appointmentModel.findById(appointmentId)
      if(appointmentData && appointmentData.docId.toString() === doctorId){
         await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
         return res.json({success:true,message:'Appointment Cancelled'})
      } else{
         return res.json({success:false,message:'Cancellation failed Failed'})
      }

   } catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
   }
}

//API to get dashboard data for doctor panel
const doctorDashboard = async (req,res)=>{
    try{
      const docId = req.docId

      const appointments = await appointmentModel.find({docId})

      let earnings = 0

      appointments.map((item )=>{
         if(item.isCompleted || item.payment){
            earnings += item.amount
         }
      })

      let patients = []

      appointments.map((item)=>{
          if(!patients.includes(item.userId)){
            patients.push(item.userId)
          }
      })

      const dashData = {
        earnings,
        appointments: appointments.length,
        patients: patients.length,
        latestAppointments: appointments.reverse().slice(0,5),
      }

      res.json({success:true,dashData})

    } catch(error){
      console.log(error)
      res.json({success:false,message:error.message})
    }
}

//API to get doctor profile for doctor panel
const doctorProfile = async(req,res)=>{

  try{

    const docId = req.docId
    const profileData = await doctorModel.findById(docId).select('-password')

    res.json({success:true,profileData})

  } catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }

}

//API to update doctor profile data from Doctor Panel
const updateDoctorProfile = async(req,res)=>{

  try{
    
    const docId = req.docId
    const {fees,address,available} = req.body

    await doctorModel.findByIdAndUpdate(docId,{fees,address,available})
    console.log("UPDATED AVAILABILITY:", available)


    res.json({success:true,message:'Profile Updated'})

  } catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  }

}


export {changeAvailability,doctorList,loginDoctor, appointmentsDoctor,appointmentCancel,appointmentComplete,doctorDashboard,doctorProfile,updateDoctorProfile}