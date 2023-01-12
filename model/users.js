const { softDeletePlugin } = require('soft-delete-plugin-mongoose');
const mongoose = require("mongoose")

const Schema = new  mongoose.Schema({
    social_id : {
        type:String,
        default:''
    },
    name:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    username:{
        type:String,
        default:''
    },
    password:{
        type:String,
        require:true
    },
    country_code:{
        type:String,
        default:''
    },
    mobile_no:{
        type:String,
        default:''
    },
    page_name:{
        type:String,
        default:''
    },
    gender:{
        type:String,
        default:''
    },
    dob : {
        type:Date,
        default:null

    },
    otp : {
        type:String
    },
    device_id :{
        type:String,
        default:''
    },
    fcm_id :{
        type:String,
        default:''
    },
    otp_expired : {
        type:String,
    },
    profile_image : {
        type:String,
        default:'',
        require:true
    },
    website : {
        type:String,
        default:''
    },
    
    referral_code : {
        type:String,
        default:''
    },
    iat : {
        type:String,
        default:''
    },
    long : {
        type:String,
        default:''
    },
    email_verified_at : {
        type:String,
        default:''
    },
    remember_token : {
        type:String,
        default:''
    },
    country_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"countries"
    },
    language_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"languages"
    },
    allow_find_me : {
        type:Boolean,
        default:true,
        require:true

    },
    private_account : {
        type:Boolean,
        default:false,
        require:true
        
    },
    is_vip : {
        type:Boolean,
        default:false,
        require:true
    },
    wallet : {
        type:Number,
        default:0 ,
        require:true
    },
    type : {
        type:Number,
        default:1,
        require:true
    },
    status : {
        type:Boolean,
        default:true,
        require:true
    }

},{timestamps:true})
Schema.plugin(softDeletePlugin)

const Users = new mongoose.model("Users",Schema)
module.exports = Users;