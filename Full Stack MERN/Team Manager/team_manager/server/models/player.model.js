//1. import mongoose 
const mongoose = require("mongoose")

//2. create a schema ------------------------------------------- 
const PlayerSchema = new mongoose.Schema({
                                        firstName : {   type : String,
                                                    minlength:[3,"{PATH} must have at least 3 chars, but you entered {VALUE} "],
                                                    required: true,
                                                },

                                        lastName : {   type : String,
                                                    minlength:[3,"{PATH} must have at least 3 chars, but you entered {VALUE} "],
                                                    required: true,
                                                },

                                        gender : {   type : String,
                                                    default: "MAl",
                                                },
                                        
                                        nbMatch : {    type : Number,
                                                        required: true,
                                                        min:[0,"{PATH} must be positif Number {VALUE}"],
                                                        default: 0 ,
                                                    },
                                        isPlaying :{
                                                        type: Boolean,
                                                        default: false,
                                                    },

                                        position :{
                                            type : String,
                                            required: [true, "{PATH} you should be shoose one position {VALUE}" ]
                                        }
                                                },{timestamps: true} )
//3 . create instant of schema ----------------------------------
const Player = mongoose.model("Player" , PlayerSchema);
//4. export schema ----------------------------------------------
module.exports = Player;