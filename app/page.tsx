"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Star, Award, Users, Wrench, Send, CheckCircle, AlertCircle, User, Stethoscope } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ProductCard } from "@/components/product-card"

const products = [
  {
    id: 1,
    name: "Goniometer Set",
    description: "Precision joint angle measurement tools for accurate assessment",
    detailedDescription:
      "Professional goniometer set for measuring joint range of motion with high precision. Essential tool for physiotherapy assessment and progress tracking.",
    features: [
      "360-degree measurement capability",
      "Durable plastic construction",
      "Easy-to-read markings",
      "Multiple sizes included",
    ],
    applications: [
      "Joint range of motion assessment",
      "Progress monitoring",
      "Treatment planning",
      "Research documentation",
    ],
    image: "/equipment/imagex.png",
    category: "Assessment Tools",
  },
  {
    id: 2,
    name: "Soft Ball Set",
    description: "Therapeutic exercise balls for grip strengthening and hand therapy",
    detailedDescription:
      "Set of soft therapeutic balls in various densities for progressive grip strengthening and hand rehabilitation exercises.",
    features: ["Multiple resistance levels", "Non-slip surface", "Easy to clean", "Durable material"],
    applications: ["Grip strengthening", "Hand rehabilitation", "Stress relief therapy", "Finger dexterity training"],
    image: "/equipment/image copy 18.png",
    category: "Hand Therapy",
  },
  {
    id: 3,
    name: "Hanging Spring System",
    description: "Suspension therapy equipment for upper limb rehabilitation",
    detailedDescription:
      "Professional hanging spring system designed for suspension therapy and upper limb rehabilitation with adjustable resistance.",
    features: ["Adjustable spring tension", "Secure mounting system", "Smooth operation", "Professional grade springs"],
    applications: ["Upper limb rehabilitation", "Suspension therapy", "Range of motion exercises", "Strength training"],
    image: "/equipment/image copyx.png",
    category: "Suspension Therapy",
  },
  {
    id: 4,
    name: "Finger Gripper",
    description: "Individual finger strengthening device for targeted therapy",
    detailedDescription:
      "Specialized device for individual finger strengthening and rehabilitation, allowing targeted therapy for each digit.",
    features: ["Individual finger isolation", "Adjustable resistance", "Ergonomic design", "Portable and lightweight"],
    applications: [
      "Post-injury rehabilitation",
      "Arthritis management",
      "Finger strength training",
      "Fine motor skill development",
    ],
    image: "/equipment/image copy 2x.png",
    category: "Hand Therapy",
  },
  {
    id: 5,
    name: "Finger Ring Exerciser",
    description: "Finger exercise rings for dexterity and strength training",
    detailedDescription:
      "Set of finger exercise rings designed to improve finger dexterity, strength, and coordination through targeted exercises.",
    features: ["Various resistance levels", "Comfortable grip", "Durable construction", "Easy to use"],
    applications: [
      "Finger dexterity training",
      "Strength building",
      "Coordination improvement",
      "Rehabilitation therapy",
    ],
    image: "/equipment/image copy 3x.png",
    category: "Hand Therapy",
  },
  {
    id: 6,
    name: "Finger Spring Exerciser",
    description: "Spring-loaded finger exercise tools for resistance training",
    detailedDescription:
      "Professional finger spring exerciser providing controlled resistance for finger strengthening and rehabilitation exercises.",
    features: ["Spring-loaded resistance", "Individual finger training", "Adjustable tension", "Compact design"],
    applications: [
      "Finger strengthening",
      "Post-surgical rehabilitation",
      "Arthritis therapy",
      "Sports injury recovery",
    ],
    image: "/equipment/image copy 13.png",
    category: "Hand Therapy",
  },
  {
    id: 7,
    name: "Finger Weight System",
    description: "Weighted finger exercise equipment for progressive training",
    detailedDescription:
      "Finger weight system designed for progressive resistance training and strengthening of individual fingers and hand muscles.",
    features: [
      "Progressive weight options",
      "Secure finger attachment",
      "Comfortable padding",
      "Professional grade materials",
    ],
    applications: [
      "Progressive strength training",
      "Rehabilitation therapy",
      "Sports conditioning",
      "Injury prevention",
    ],
    image: "/equipment/image copy 15.png",
    category: "Hand Therapy",
  },
  {
    id: 8,
    name: "Pinch Gripper",
    description: "Pinch strength training device for thumb and finger coordination",
    detailedDescription:
      "Specialized pinch gripper designed to strengthen pinch grip and improve coordination between thumb and fingers.",
    features: ["Adjustable resistance", "Ergonomic design", "Durable construction", "Easy grip handles"],
    applications: ["Pinch grip strengthening", "Thumb rehabilitation", "Fine motor control", "Occupational therapy"],
    image: "/equipment/image copy 4x.png",
    category: "Hand Therapy",
  },
  {
    id: 9,
    name: "Peg Board Square",
    description: "Fine motor skill training board with square pegs",
    detailedDescription:
      "Square peg board designed for fine motor skill development, hand-eye coordination, and cognitive rehabilitation exercises.",
    features: ["Durable wooden construction", "Various peg sizes", "Smooth finish", "Educational design"],
    applications: [
      "Fine motor skill development",
      "Hand-eye coordination",
      "Cognitive rehabilitation",
      "Occupational therapy",
    ],
    image: "/equipment/image copy 5x.png",
    category: "Fine Motor Skills",
  },
  {
    id: 10,
    name: "Peg Board Graded",
    description: "Progressive difficulty peg board for skill development",
    detailedDescription:
      "Graded peg board system with progressive difficulty levels for systematic fine motor skill development and rehabilitation.",
    features: [
      "Progressive difficulty levels",
      "Multiple peg configurations",
      "Quality wood construction",
      "Therapeutic design",
    ],
    applications: [
      "Progressive skill training",
      "Rehabilitation therapy",
      "Cognitive assessment",
      "Motor planning exercises",
    ],
    image: "/equipment/image copy 6x.png",
    category: "Fine Motor Skills",
  },
  {
    id: 11,
    name: "Velcro Hand Board",
    description: "Hand coordination training board with velcro attachments",
    detailedDescription:
      "Interactive velcro hand board designed for hand coordination training and fine motor skill development through engaging activities.",
    features: ["Velcro attachment system", "Interactive design", "Durable materials", "Easy to clean"],
    applications: ["Hand coordination training", "Fine motor development", "Sensory integration", "Pediatric therapy"],
    image: "/equipment/image copy 7x.png",
    category: "Coordination Training",
  },
  {
    id: 12,
    name: "Supination Pronation Board",
    description: "Forearm rotation exercise equipment for wrist rehabilitation",
    detailedDescription:
      "Professional supination-pronation board designed for forearm rotation exercises and wrist rehabilitation therapy.",
    features: ["Smooth rotation mechanism", "Adjustable resistance", "Ergonomic handle", "Stable base design"],
    applications: [
      "Forearm rotation training",
      "Wrist rehabilitation",
      "Post-fracture therapy",
      "Range of motion exercises",
    ],
    image: "/equipment/image copy 33.png",
    category: "Upper Limb",
  },
  {
    id: 13,
    name: "Supination Pronation Dumbbells",
    description: "Weighted tools for forearm strengthening and rotation exercises",
    detailedDescription:
      "Specialized dumbbells designed for supination and pronation exercises, featuring ergonomic grips for effective forearm strengthening.",
    features: ["Ergonomic grip design", "Multiple weight options", "Balanced construction", "Non-slip surface"],
    applications: [
      "Forearm strengthening",
      "Rotation exercises",
      "Tennis elbow rehabilitation",
      "Grip strength training",
    ],
    image: "/equipment/WhatsApp Image 2025-07-10 at 11.40.55 AM.jpg",
    category: "Upper Limb",
  },
  {
    id: 14,
    name: "Dumbbells",
    description: "Various weight dumbbells for progressive strength training",
    detailedDescription:
      "Set of therapeutic dumbbells in various weights designed for progressive strength training and rehabilitation exercises.",
    features: ["Multiple weight options", "Comfortable grip", "Durable coating", "Color-coded weights"],
    applications: [
      "Strength training",
      "Progressive rehabilitation",
      "Upper limb conditioning",
      "Functional exercises",
    ],
    image: "/equipment/Adobe Express - file (1).jpg",
    category: "Strength Training",
  },
  {
    id: 16,
    name: "Wrist Roller",
    description: "Wrist strengthening and mobility device for rehabilitation",
    detailedDescription:
      "Professional wrist roller designed for wrist strengthening, mobility improvement, and rehabilitation following injury or surgery.",
    features: ["Adjustable weight system", "Smooth rolling action", "Ergonomic handle", "Durable construction"],
    applications: [
      "Wrist strengthening",
      "Mobility improvement",
      "Post-injury rehabilitation",
      "Carpal tunnel therapy",
    ],
    image: "/equipment/imagey.png",
    category: "Upper Limb",
  },
  {
    id: 18,
    name: "Shoulder Bar",
    description: "Shoulder mobility and strengthening equipment for upper limb therapy",
    detailedDescription:
      "Professional shoulder bar designed for shoulder mobility exercises, strengthening, and rehabilitation following shoulder injuries.",
    features: ["Adjustable height", "Smooth operation", "Stable base", "Professional grade materials"],
    applications: [
      "Shoulder mobility exercises",
      "Strengthening therapy",
      "Post-surgical rehabilitation",
      "Range of motion training",
    ],
    image: "/equipment/Adobe Express - file (3).jpg",
    category: "Upper Limb",
  },
  {
    id: 19,
    name: "Pulley System with Accessories",
    description: "Complete pulley system for upper limb exercises and rehabilitation",
    detailedDescription:
      "Comprehensive pulley system including handles, ropes, and brackets for versatile upper limb rehabilitation and exercise therapy.",
    features: ["Complete accessory set", "Smooth pulley action", "Adjustable resistance", "Wall or ceiling mount"],
    applications: [
      "Upper limb rehabilitation",
      "Range of motion exercises",
      "Strength training",
      "Post-surgical therapy",
    ],
    image: "/equipment/Adobe Express - file (2).jpg",
    category: "Upper Limb",
  },
  {
    id: 20,
    name: "Shoulder Ladder",
    description: "Wall-mounted shoulder mobility aid for range of motion exercises",
    detailedDescription:
      "Wall-mounted shoulder ladder designed for progressive shoulder mobility exercises and range of motion improvement.",
    features: ["Wall-mounted design", "Multiple grip positions", "Durable wood construction", "Easy installation"],
    applications: [
      "Shoulder mobility training",
      "Range of motion exercises",
      "Post-injury rehabilitation",
      "Flexibility improvement",
    ],
    image: "/equipment/image_1.png",
    category: "Upper Limb",
  },
  {
    id: 21,
    name: "Ped-O-Cycle",
    description: "Pedal exerciser for lower limb strengthening and mobility",
    detailedDescription:
      "Professional pedal exerciser designed for lower limb strengthening, mobility improvement, and cardiovascular conditioning.",
    features: ["Adjustable resistance", "Stable platform", "Comfortable pedals", "Smooth operation"],
    applications: [
      "Lower limb strengthening",
      "Mobility improvement",
      "Cardiovascular conditioning",
      "Post-surgical rehabilitation",
    ],
    image: "/equipment/image copy 24.png",
    category: "Lower Limb",
  },
  {
    id: 22,
    name: "Quadriceps Board",
    description: "Specialized board for quadriceps strengthening exercises",
    detailedDescription:
      "Professional quadriceps board designed for targeted quadriceps strengthening and knee rehabilitation exercises.",
    features: ["Angled design", "Non-slip surface", "Durable construction", "Comfortable positioning"],
    applications: [
      "Quadriceps strengthening",
      "Knee rehabilitation",
      "Post-surgical therapy",
      "Sports injury recovery",
    ],
    image: "/equipment/image copy 25.png",
    category: "Lower Limb",
  },
  {
    id: 23,
    name: "Knee Exerciser",
    description: "Knee joint mobility and strengthening device for rehabilitation",
    detailedDescription:
      "Professional knee exerciser designed for knee joint mobility improvement and strengthening following injury or surgery.",
    features: ["Adjustable range of motion", "Comfortable padding", "Smooth operation", "Progressive resistance"],
    applications: [
      "Knee mobility improvement",
      "Strengthening exercises",
      "Post-surgical rehabilitation",
      "Arthritis management",
    ],
    image: "/equipment/image copy 26.png",
    category: "Lower Limb",
  },
  {
    id: 24,
    name: "Wobble Board",
    description: "Balance and proprioception training board for stability exercises",
    detailedDescription:
      "Professional wobble board designed for balance training, proprioception improvement, and ankle rehabilitation exercises.",
    features: ["Multi-directional movement", "Non-slip surface", "Durable construction", "Progressive difficulty"],
    applications: ["Balance training", "Proprioception improvement", "Ankle rehabilitation", "Sports conditioning"],
    image: "/equipment/Adobe Expres.jpg",
    category: "Balance Training",
  },
  {
    id: 25,
    name: "Balance Board",
    description: "Static balance training platform for stability improvement",
    detailedDescription:
      "Professional balance board designed for static balance training and stability improvement in rehabilitation and fitness programs.",
    features: ["Stable platform design", "Non-slip surface", "Durable materials", "Easy to use"],
    applications: ["Static balance training", "Stability improvement", "Fall prevention", "Rehabilitation therapy"],
    image: "/equipment/image copy 28.png",
    category: "Balance Training",
  },
  {
    id: 26,
    name: "Foot Exerciser",
    description: "Foot and ankle strengthening device for lower limb therapy",
    detailedDescription:
      "Professional foot exerciser designed for foot and ankle strengthening, mobility improvement, and rehabilitation therapy.",
    features: ["Multi-directional resistance", "Comfortable foot placement", "Adjustable tension", "Compact design"],
    applications: ["Foot strengthening", "Ankle mobility", "Plantar fasciitis therapy", "Post-injury rehabilitation"],
    image: "/equipment/image copy 27.png",
    category: "Lower Limb",
  },
  {
    id: 27,
    name: "Exercise Plinth",
    description: "Adjustable exercise table for various therapeutic procedures",
    detailedDescription:
      "Professional exercise plinth with adjustable height and positioning for various therapeutic procedures and exercises.",
    features: ["Height adjustable", "Comfortable padding", "Stable construction", "Easy to clean"],
    applications: ["Therapeutic exercises", "Manual therapy", "Patient positioning", "Rehabilitation procedures"],
    image: "/equipment/image copy 30.png",
    category: "Treatment Tables",
  },
  {
    id: 28,
    name: "Sitting Balance Board",
    description: "Seated balance training equipment for core stability",
    detailedDescription:
      "Professional sitting balance board designed for seated balance training and core stability improvement in rehabilitation programs.",
    features: ["Seated position training", "Core stability focus", "Safe design", "Progressive difficulty"],
    applications: ["Seated balance training", "Core stability", "Spinal rehabilitation", "Neurological therapy"],
    image: "/equipment/image copy 29.png",
    category: "Balance Training",
  },
  {
    id: 29,
    name: "Rowing Chair",
    description: "Upper body strengthening rowing device for rehabilitation",
    detailedDescription:
      "Professional rowing chair designed for upper body strengthening and cardiovascular conditioning in rehabilitation settings.",
    features: ["Adjustable resistance", "Comfortable seating", "Smooth rowing action", "Stable base"],
    applications: [
      "Upper body strengthening",
      "Cardiovascular conditioning",
      "Back rehabilitation",
      "Posture improvement",
    ],
    image: "/equipment/image copy 31.png",
    category: "Cardio Equipment",
  },
  {
    id: 30,
    name: "Stairs and Slope System",
    description: "Gait training stairs and ramp system for mobility rehabilitation",
    detailedDescription:
      "Professional stairs and slope system designed for gait training and mobility rehabilitation in clinical settings.",
    features: ["Adjustable height steps", "Safety railings", "Non-slip surfaces", "Modular design"],
    applications: ["Gait training", "Mobility rehabilitation", "Balance training", "Functional exercises"],
    image: "/equipment/image copy 32.png",
    category: "Mobility Training",
  },
  {
    id: 31,
    name: "Instrument Trolley",
    description: "Mobile storage solution for therapy instruments and equipment",
    detailedDescription:
      "Professional instrument trolley designed for organized storage and easy transport of therapy instruments and equipment.",
    features: ["Multiple storage levels", "Mobile design with wheels", "Durable construction", "Easy to clean"],
    applications: ["Equipment organization", "Mobile therapy sessions", "Clinical efficiency", "Storage solution"],
    image: "/equipment/image copy 20.png",
    category: "Storage Solutions",
  },
  {
    id: 32,
    name: "Parallel Bars with Mirror",
    description: "Gait training system with visual feedback and safety support",
    detailedDescription:
      "Professional parallel bar system with mirror and flooring designed for gait training with visual feedback and safety support.",
    features: ["Adjustable height bars", "Mirror for visual feedback", "Non-slip flooring", "Safety design"],
    applications: ["Gait training", "Balance exercises", "Walking rehabilitation", "Posture training"],
    image: "/equipment/image copy 21.png",
    category: "Gait Training",
  },
  {
    id: 33,
    name: "Quadriceps Table",
    description: "Specialized table for quadriceps strengthening and knee therapy",
    detailedDescription:
      "Professional quadriceps table designed specifically for quadriceps strengthening exercises and knee rehabilitation therapy.",
    features: ["Adjustable positioning", "Comfortable padding", "Stable construction", "Easy patient access"],
    applications: ["Quadriceps strengthening", "Knee rehabilitation", "Post-surgical therapy", "Strength assessment"],
    image: "/equipment/image copy 22.png",
    category: "Treatment Tables",
  },
  {
    id: 34,
    name: "Suspension Frame",
    description: "Overhead suspension system for therapeutic exercises",
    detailedDescription:
      "Professional suspension frame system designed for overhead therapeutic exercises and suspension therapy treatments.",
    features: [
      "Overhead mounting system",
      "Multiple attachment points",
      "Adjustable height",
      "Professional grade construction",
    ],
    applications: [
      "Suspension therapy",
      "Range of motion exercises",
      "Strength training",
      "Neurological rehabilitation",
    ],
    image: "/equipment/image copy 23.png",
    category: "Suspension Systems",
  },
  {
    id: 35,
    name: "C.P. Chair",
    description: "Specialized seating for cerebral palsy patients with adjustable support",
    detailedDescription:
      "Professional cerebral palsy chair designed with adjustable support systems for proper positioning and comfort of CP patients.",
    features: ["Adjustable support systems", "Comfortable padding", "Safety straps", "Durable construction"],
    applications: ["Cerebral palsy support", "Postural management", "Feeding assistance", "Daily living activities"],
    image: "/equipment/image.png",
    category: "CP Equipment",
  },
  {
    id: 36,
    name: "C.P. Standing Board",
    description: "Standing frame to improve posture and weight bearing for CP patients",
    detailedDescription:
      "Professional standing board designed for cerebral palsy patients to improve posture, weight bearing, and overall development.",
    features: ["Adjustable height", "Safety support straps", "Stable base", "Comfortable positioning"],
    applications: [
      "Weight bearing exercises",
      "Posture improvement",
      "Bone density maintenance",
      "Circulation enhancement",
    ],
    image: "/equipment/image copy.png",
    category: "CP Equipment",
  },
  {
    id: 37,
    name: "Wall Bar System",
    description: "Multi-level exercise bars for strength and mobility training",
    detailedDescription:
      "Professional wall bar system with multiple levels designed for comprehensive strength and mobility training exercises.",
    features: [
      "Multiple exercise levels",
      "Wall-mounted design",
      "Durable wood construction",
      "Versatile exercise options",
    ],
    applications: ["Strength training", "Mobility exercises", "Stretching routines", "Rehabilitation therapy"],
    image: "/equipment/image copy 2.png",
    category: "Exercise Equipment",
  },
  {
    id: 38,
    name: "C.P. Walker",
    description: "Mobility aid specifically designed for cerebral palsy patients",
    detailedDescription:
      "Specialized walker designed for cerebral palsy patients with adjustable support and safety features for improved mobility.",
    features: ["Adjustable height", "Safety support features", "Lightweight design", "Easy maneuverability"],
    applications: ["Mobility assistance", "Gait training", "Independence promotion", "Balance support"],
    image: "/equipment/image copy 3.png",
    category: "CP Equipment",
  },
  {
    id: 39,
    name: "Bolster Set",
    description: "Therapeutic positioning aids in various sizes for patient support",
    detailedDescription:
      "Professional bolster set in various sizes designed for therapeutic positioning and patient support during exercises and treatments.",
    features: ["Multiple sizes available", "Comfortable foam filling", "Easy to clean covers", "Durable construction"],
    applications: ["Patient positioning", "Exercise support", "Comfort enhancement", "Therapeutic positioning"],
    image: "/equipment/Adobe Express - file (1).jpg",
    category: "Positioning Aids",
  },
  {
    id: 40,
    name: "Therapeutic Wedge",
    description: "Positioning wedge for therapeutic exercises and patient comfort",
    detailedDescription:
      "Professional therapeutic wedge designed for patient positioning during exercises and treatments, providing optimal support and comfort.",
    features: ["Optimal angle design", "Comfortable foam construction", "Easy to clean", "Versatile positioning"],
    applications: ["Exercise positioning", "Patient comfort", "Therapeutic support", "Postural alignment"],
    image: "/equipment/image copy 4.png",
    category: "Positioning Aids",
  },
  {
    id: 41,
    name: "C.P. Corner Board",
    description: "Corner positioning system for stability training in CP patients",
    detailedDescription:
      "Professional corner board system designed for cerebral palsy patients to provide stability training and postural support.",
    features: ["Corner positioning design", "Stability support", "Adjustable components", "Safety features"],
    applications: ["Stability training", "Postural support", "Balance improvement", "Therapeutic positioning"],
    image: "/equipment/image copy 5.png",
    category: "CP Equipment",
  },
  {
    id: 42,
    name: "Climber",
    description: "Climbing equipment for gross motor development and strength building",
    detailedDescription:
      "Professional climbing structure designed for gross motor development, strength building, and coordination improvement in pediatric therapy.",
    features: ["Safe climbing design", "Multiple difficulty levels", "Durable construction", "Safety features"],
    applications: ["Gross motor development", "Strength building", "Coordination training", "Confidence building"],
    image: "/equipment/image copyy.png",
    category: "Pediatric Equipment",
  },
  {
    id: 43,
    name: "Ball Pool",
    description: "Therapeutic ball pit for sensory integration and play therapy",
    detailedDescription:
      "Professional sensory ball pool designed for sensory integration therapy and therapeutic play in pediatric rehabilitation settings.",
    features: ["Safe ball pool design", "Colorful sensory balls", "Easy to clean", "Therapeutic benefits"],
    applications: ["Sensory integration", "Play therapy", "Relaxation therapy", "Pediatric rehabilitation"],
    image: "/equipment/image copy 2y.png",
    category: "Sensory Equipment",
  },
  {
    id: 44,
    name: "Prone Swing",
    description: "Prone position swing for sensory input and vestibular stimulation",
    detailedDescription:
      "Professional prone swing designed for sensory input and vestibular stimulation in pediatric therapy and sensory integration programs.",
    features: ["Prone positioning support", "Safe swing design", "Adjustable height", "Comfortable padding"],
    applications: ["Vestibular stimulation", "Sensory integration", "Postural control", "Therapeutic play"],
    image: "/equipment/image copy 4y.png",
    category: "Sensory Equipment",
  },
  {
    id: 45,
    name: "Therapeutic Hammock",
    description: "Therapeutic hammock swing for sensory integration and relaxation",
    detailedDescription:
      "Professional therapeutic hammock designed for sensory integration therapy and relaxation in pediatric and adult rehabilitation programs.",
    features: ["Comfortable hammock design", "Safe suspension system", "Calming effect", "Durable materials"],
    applications: ["Sensory integration", "Relaxation therapy", "Anxiety reduction", "Therapeutic positioning"],
    image: "/equipment/image copy 3y.png",
    category: "Sensory Equipment",
  },
  {
    id: 46,
    name: "Platform Swing",
    description: "Platform swing for balance, coordination and sensory integration",
    detailedDescription:
      "Professional platform swing designed for balance training, coordination improvement, and sensory integration in therapeutic settings.",
    features: [
      "Stable platform design",
      "Safe swing mechanism",
      "Multiple therapy applications",
      "Adjustable suspension",
    ],
    applications: ["Balance training", "Coordination improvement", "Sensory integration", "Vestibular therapy"],
    image: "/equipment/image copy 5y.png",
    category: "Sensory Equipment",
  },
  {
    id: 47,
    name: "Barrel Swing",
    description: "Cylindrical swing for vestibular input and sensory therapy",
    detailedDescription:
      "Professional barrel swing designed for vestibular input and sensory therapy, providing unique movement patterns for therapeutic benefit.",
    features: ["Cylindrical design", "Vestibular stimulation", "Safe suspension", "Therapeutic movement"],
    applications: ["Vestibular therapy", "Sensory integration", "Balance training", "Therapeutic movement"],
    image: "/equipment/image copy 6y.png",
    category: "Sensory Equipment",
  },
  {
    id: 48,
    name: "Disc Swing",
    description: "Rotating disc swing for sensory therapy and balance training",
    detailedDescription:
      "Professional disc swing with rotating capability designed for sensory therapy and balance training in pediatric rehabilitation programs.",
    features: ["Rotating disc design", "Multi-directional movement", "Safe construction", "Therapeutic benefits"],
    applications: ["Sensory therapy", "Balance training", "Coordination improvement", "Vestibular stimulation"],
    image: "/equipment/image copy 7y.png",
    category: "Sensory Equipment",
  },
]

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "All equipment manufactured with highest quality standards and durable materials",
  },
  {
    icon: Users,
    title: "Expert Design",
    description: "Designed by physiotherapy experts for optimal therapeutic outcomes",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Customizable equipment to meet specific therapeutic requirements",
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "Trusted by healthcare professionals and rehabilitation centers nationwide",
  },
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'setup_required'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send email using our API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', message: '' })
        console.log('Email sent successfully:', result.emailId)
      } else {
        console.error('Server error:', result.error)
        if (result.setup_required) {
          // Show setup required error with helpful message
          setSubmitStatus('setup_required')
        } else {
          setSubmitStatus('error')
        }
      }
    } catch (error) {
      console.error('Network error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center p-1">
                <Image 
                  src="/logo.jpeg" 
                  alt="OrthoPhysio Equipments Logo" 
                  width={80} 
                  height={80} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">OrthoPhysio Equipments</h1>
                <p className="text-sm text-gray-600">Professional Physiotherapy Equipment</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-blue-600 font-medium">
                Products
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Professional Physiotherapy Equipment Manufacturer
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced Physiotherapy
              <span className="text-blue-600 block">Equipment Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Manufacturing high-quality physiotherapy equipment for rehabilitation centers, hospitals, colleges, and clinics.
              Trusted by healthcare professionals nationwide for superior therapeutic outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="#products">View Our Products</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="#contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose OrthoPhysio Equipments?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality physiotherapy equipment with innovative designs and
              exceptional durability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of physiotherapy equipment designed for various therapeutic applications and
              patient needs. Hover over each product to see detailed information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">About OrthoPhysio Equipments</h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
              Orthophysio Equipments is a trusted name in the physiotherapy industry, proudly serving doctors of physiotherapy for over 25 years. Based in Gujarat, we specialize in the design, development, and manufacturing of high-quality mechanical exercise equipment tailored for physiotherapy use.
              </p>
              <p>
              Our products are widely used across government institutions, private colleges, and clinics throughout Vadodara, Surat, Bardoli, Rajkot, Morbi, and other cities in Gujarat, as well as in Abu Road and other regions of Rajasthan. Over the years, our commitment to quality and reliability has earned us the confidence of physiotherapy professionals across the region.
              </p>
              <p>
              At Orthophysio, we go beyond just manufacturing — we collaborate with physiotherapists to understand their evolving needs and develop customized solutions that support effective treatment and recovery. Our equipment is not only designed for clinical use but is also patient-friendly and suitable for home-based rehabilitation, allowing individuals to continue their therapy conveniently and safely at home.
              </p>
              <p>Our mission is simple: to deliver durable, innovative, and user-friendly physiotherapy equipment, on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to enhance your physiotherapy practice? Contact us for product information, custom solutions, or
                to request a quote.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+91 9824276125</p>
                        <p className="text-gray-600">+91 9426984196</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">bhavinpopat2007@gmail.com</p>
                        {/* <p className="text-gray-600">sales@orthophysioequipments.com</p> */}
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">
                          C-19/20 Jalanand Township,
                          Gorwa Reffinery Road,
                          <br />
                          Vadodara, Gujarat - 390016
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Company Proprietor</h4>
                        <p className="text-gray-600">Nila Popat</p>
                        <p className="text-gray-600">+91 9510274131</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Recommended Physiotherapist</h4>
                        <p className="text-gray-600">Dr. Mauly Popat</p>
                        <p className="text-gray-600 text-sm">Masters in Cardio Physiotherapy</p>
                        {/* <p className="text-gray-600">+91 9408915063</p> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your Phone Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                        <CheckCircle className="w-5 h-5" />
                        <span>Message sent successfully! We'll get back to you soon.</span>
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle className="w-5 h-5" />
                        <span>Failed to send message. Please try again or contact us directly.</span>
                      </div>
                    )}
                    {submitStatus === 'setup_required' && (
                      <div className="flex items-center space-x-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                        <AlertCircle className="w-5 h-5" />
                        <span>Email service setup required. Please contact us directly at bhavinpopat2007@gmail.com or call +91 9824276125.</span>
                      </div>
                    )}
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-20 h-20 rounded-lg flex items-center justify-center p-1">
                  <Image 
                    src="/logo.jpeg" 
                    alt="OrthoPhysio Equipments Logo" 
                    width={80} 
                    height={80} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">OrthoPhysio Equipments</h3>
                  <p className="text-gray-400 text-sm">Professional Physiotherapy Equipment</p>
                </div>
              </div>
              <p className="text-gray-400">
                Manufacturing high-quality physiotherapy equipment for healthcare professionals nationwide.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +91 9824276125</p>
                <p>✉️ bhavinpopat2007@gmail.com</p>
                <p>📍 Vadodara, Gujarat</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OrthoPhysio Equipments. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
