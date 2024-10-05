import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcryptjs'
import { User } from '@shared/interfaces/userInterfaces'

// Define the schema for LocalUser
const userSchema: Schema = new Schema<User>({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  roles: {
    type: [String],
    required: false,
    default: ['Member'],
  },
})

// Update the updatedAt field before saving the document
userSchema.pre('save', function (next) {
  this.updatedAt = new Date()
  next()
})

// Salt and hash the password.
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(String(this.password), salt)
    this.password = hash
    next()
  } catch (error) {
    if (error instanceof Error) {
      next(error)
    }
  }
})

// Create the model based on the schema
const userModel = mongoose.model<User>('User', userSchema)

export default userModel
