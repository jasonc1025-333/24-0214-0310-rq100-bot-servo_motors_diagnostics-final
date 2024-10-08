function screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func (screen_x_new_num: number, screen_y_new_num: number) {
    led.plotBrightness(screen_X_Old_Num, screen_Y_Old_Num, screen_XY_Brightness_Old_Num)
    screen_X_Old_Num = screen_x_new_num
    screen_Y_Old_Num = screen_y_new_num
    screen_XY_Brightness_Old_Num = led.pointBrightness(screen_x_new_num, screen_y_new_num)
    led.plotBrightness(screen_x_new_num, screen_y_new_num, screenBrightness_Heartbeat_Count_Int)
}
function screen_Clear_Func () {
    for (let index_X = 0; index_X <= 4; index_X++) {
        for (let index_Y = 0; index_Y <= 4; index_Y++) {
            if (led.point(index_X, index_Y)) {
                led.unplot(index_X, index_Y)
            }
        }
    }
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Software Reset"
        )
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Give time for other stacks to complete under different concurrent 'SW_ModeState' ..."
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "... to not conflict with following LED Display"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Reset__ID_INT
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            // 1.0 too slow, 0.5 not bad, try 0.20
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(0.2, quest_Time_Units_Enum.Seconds)
        }
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
        control.reset()
    }
})
input.onButtonPressed(Button.A, function () {
    if (true) {
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Servo_Motors: Right Only"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "50% Power for Medium Speed"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "0% Power for Stop"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            0,
            50
            )
        }
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
            )
            display.rotateTo(display.Direction.UpsideDown)
            basic.showLeds(`
                . . . # .
                . . # # #
                . . . # .
                . . . # .
                . # . # .
                `)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
    if (true) {
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Servo_Motors: All Stop"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            0,
            0
            )
        }
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
            )
            display.rotateTo(display.Direction.UpsideDown)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # . # .
                `)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
})
// BUG FIX: Switch from BlockCode vs TextCode
// let device_Type_Controller_Bool = 0
// 
// let device_Mode_Edit_GroupChannelNum_Bool = 0
// 
// let motor_Power_Gear_02_MAX = 0
// 
// let motor_Power_Gear_01_MAX = 0
// 
// let device_Type_Controller_Bool = 0
function setup_VariablesAndConstants_UserCustomizableNot_Func () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "THIS STACK NOT CUSTOMIZABLE"
        )
        if (true) {
            quest_Note_5.quest_Show_String_For_Note_Small_Func(
            "Mannual Overrides to fix compiler bug"
            )
            quest_Note_5.quest_Show_String_For_Note_Small_Func(
            "Following assignments prevent variables from being 'grayed' out"
            )
            if (true) {
                // //jwc o device_Type_Bot_Bool = false
                // //jwc o device_Type_Controller_Bool = false
                _system_Hw_DeviceType__Null__ID_INT = 0
                _system_Hw_DeviceType__Bot__ID_INT = 1
                _system_Hw_DeviceType__Controller_Joystick__ID_INT = 2
                if (true) {
                    _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Null__ID_INT
                }
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Pixels_Max: Horizontal/Vertical: 512 -&- Diagonal: 887 [= sqrt(512^2 + 512^2)]"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Was 15, try 30 to accomodate off_calibrated controllers"
                )
                quest_Note_4.quest_Show_String_For_Note_Small_Func(
                "Optional Advanced Coding: Following Block_Code Moddable"
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 30
            }
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = 0
                controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
            }
            if (true) {
                motor_Power_Full_Current_Pos = 0
                motor_Power_Full_Current_Neg = 0
                motor_Power_Half_Current = 0
                motor_Power_ZERO_INT = 0
                // //jwc ? // jwc: add to fix compiler error
                // //jwc ? motor_Power_Gear_01_MAX = 0
                // //jwc ? // jwc: add to fix compiler error
                // //jwc ? motor_Power_Gear_02_MAX = 0
                motor_Power_Gear_Number_Int = 0
            }
            if (true) {
                screenBrightness_Heartbeat_Count_Int = 0
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "20msec = 50.0fps (More Noticeable Flicker vs 15msec = 66.7 fps)"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "30fps is min for real-time response"
                )
                screen_Delay_MSEC_INT = 20
            }
            if (true) {
                _system_Sw_ModeState__Null__ID_INT = 0
                _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 1
                _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 2
                _system_Sw_ModeState__Autonomous__ID_INT = 3
                _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 4
                _system_Sw_ModeState__Test__ID_INT = 5
                _system_Sw_ModeState__Reset__ID_INT = 6
                if (true) {
                    _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Null__ID_INT
                }
            }
            if (true) {
                screen_XY_Brightness_Old_Num = 0
                screen_Y_Old_Num = 0
                screen_X_Old_Num = 0
            }
            if (true) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Variable & Constant: Customizable Settings"
                )
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Gears are not used in Level_1 but need these null declarations... "
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "...to allow Level_2 code to compile (though unused in Level_1)"
                    )
                    // jwc needed to fix compiler issue
                    motor_Power_Gear_01_MAX = 0
                    // jwc needed to fix compiler issue
                    motor_Power_Gear_02_MAX = 0
                }
                if (true) {
                    wuKong.mecanumWheel(
                    wuKong.ServoList.S1,
                    wuKong.ServoList.S3,
                    wuKong.ServoList.S0,
                    wuKong.ServoList.S2
                    )
                }
                if (true) {
                    servoArm_DOWN_DEGREES_INT = 0
                    servoArm_Left_UP_DEGREES_INT = 20
                    servoArm_Right_UP_DEGREES_INT = 45
                    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S7, servoArm_Left_UP_DEGREES_INT)
                    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S6, servoArm_Right_UP_DEGREES_INT)
                    servoArm_Left_Up_Bool = true
                    servoArm_Right_Up_Bool = true
                }
                if (true) {
                    quest_Dashboard.quest_Show_Oled_Cleared_Func(
                    )
                    quest_Dashboard.quest_Show_String_For_Oled_BigFont_Func(
                    "Hello  : )",
                    0,
                    0
                    )
                }
            }
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
}
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.up, function () {
    // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        radio.sendString("serv_rgt")
        screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(3, 2)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Servo_Motors: Left & Right"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "50% Power for Medium Speed"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "0% Power for Stop"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            50,
            50
            )
        }
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
            )
            display.rotateTo(display.Direction.UpsideDown)
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                . # . # .
                . # . # .
                `)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
    if (true) {
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Servo_Motors: All Stop"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            0,
            0
            )
        }
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
            )
            display.rotateTo(display.Direction.UpsideDown)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # . # .
                `)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
})
radio.onReceivedString(function (receivedString) {
    quest_Note_6.quest_Show_String_For_Note_Big_Func(
    "24-0609-0640 jwc obsolete: replaced with new stack with servo_lft & servo_rht."
    )
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Network_Message Received' Dual Usage:: Usage #1: Operate Bot from Controller_Joystick"
        )
        // //jwc o if (device_Type_Bot_Bool && _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT) {
        // //jwc o } else if (!(device_Type_Bot_Bool)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Bot__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (receivedString == "forward") {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block More as Visual Comment Since very Laggy"
                    )
                    basic.showLeds(`
                        . . # . .
                        . # # # .
                        . . # . .
                        . . # . .
                        . . . . .
                        `)
                } else {
                    quest_Note_2.quest_Show_String_For_Note_Big_Func(
                    "Following Block_Code Moddable"
                    )
                    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                    30,
                    30
                    )
                    screen_Clear_Func()
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 0)
                }
            } else if (receivedString == "backward") {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block More as Visual Comment Since very Laggy"
                    )
                    basic.showLeds(`
                        . . . . .
                        . . # . .
                        . . # . .
                        . # # # .
                        . . # . .
                        `)
                } else {
                    quest_Note_2.quest_Show_String_For_Note_Big_Func(
                    "Following Block_Code Moddable"
                    )
                    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                    -30,
                    -30
                    )
                    screen_Clear_Func()
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 4)
                }
            } else if (receivedString == "left") {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block More as Visual Comment Since very Laggy"
                    )
                    basic.showLeds(`
                        . . . . .
                        . # . . .
                        # # # # .
                        . # . . .
                        . . . . .
                        `)
                } else {
                    quest_Note_2.quest_Show_String_For_Note_Big_Func(
                    "Following Block_Code Moddable"
                    )
                    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                    0,
                    30
                    )
                    screen_Clear_Func()
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(0, 2)
                }
            } else if (receivedString == "right") {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block More as Visual Comment Since very Laggy"
                    )
                    basic.showLeds(`
                        . . . . .
                        . . . # .
                        . # # # #
                        . . . # .
                        . . . . .
                        `)
                } else {
                    quest_Note_2.quest_Show_String_For_Note_Big_Func(
                    "Following Block_Code Moddable"
                    )
                    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                    30,
                    0
                    )
                    screen_Clear_Func()
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(4, 2)
                }
            } else if (receivedString == "stop") {
                if (false) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Following Block More as Visual Comment Since very Laggy"
                    )
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
                        `)
                } else {
                    // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                    0,
                    0
                    )
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Avoid 'screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2,2)' since Screen Conflicts"
                    )
                }
            } else {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Error: Unknown Msg"
                )
                // //jwc o roboQuest.powerMotorsViaBlueRedBlackPins(PortGroup_BlueRedBlack__PortIds__Enum.S1_MotorLeft__S0_MotorRight, motor_Power_ZERO_INT, motor_Power_ZERO_INT)
                quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                0,
                0
                )
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "For now, all 4 corners = Error: Unknown Msg"
                    )
                    error_Message_Func("2024-0213-1700", receivedString)
screen_IconMessage_Func("error")
                }
            }
            network__CpuCycle_Post__Management_Func()
        } else if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Null__ID_INT) {
            quest_Note_3.quest_Show_String_For_Note_Big_Func(
            "Network_Message Received' Dual Usage:: Usage #2: Designate this micro:bit as Bot to *Complete* Network_Pairing w/ Bot"
            )
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Code Activation of Bot:: 1of1 : 1st micro:bit Having Received a Network_Message is Designated as Device:Bot"
            )
            // //jwc o device_Type_Bot_Bool = true
            _system_Hw_DeviceType__Now__Id_Int = _system_Hw_DeviceType__Bot__ID_INT
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Start with 'DeviceType' Status to allow screen to stabilize & not clobber a LED for 'GroupChannelNum' Status"
            )
            _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT
            setup_BotOnly_Func()
        }
        if (true) {
            quest_Note_6.quest_Show_String_For_Note_Big_Func(
            "Level 1.0: Variables_n_Constants_Not (Hardcode) ~ Yes: 1-Sec Lag 'show leds'"
            )
            quest_Note_4.quest_Show_String_For_Note_Small_Func(
            "For exclusive activation, place this 'on radio received' stack higher than other 'on radio received' stacks"
            )
            quest_Note_5.quest_Show_String_For_Note_Small_Func(
            "Bot Stack: Main 1of1 ~ 'on radio received(receivedString)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Network Message Max_Character_Length: 19"
            )
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Servo_Motors: Left Only"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "50% Power for Medium Speed"
            )
            quest_Note_2.quest_Show_String_For_Note_Small_Func(
            "0% Power for Stop"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            50,
            0
            )
        }
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
            )
            display.rotateTo(display.Direction.UpsideDown)
            basic.showLeds(`
                . # . . .
                # # # . .
                . # . . .
                . # . . .
                . # . # .
                `)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
    if (true) {
        if (true) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Servo_Motors: All Stop"
            )
            quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
            quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
            0,
            0
            )
        }
        if (true) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
            )
            display.rotateTo(display.Direction.UpsideDown)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # . # .
                `)
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Continue Current State for Time Below"
            )
            quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
        }
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.up, function () {
    // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
    if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        radio.sendString("serv_lft")
        screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(1, 2)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Built-In Diagnsotic Test for Both Servo_Motors L & R"
        )
        if (_system_Hw_DeviceType__Now__Id_Int != _system_Hw_DeviceType__Controller_Joystick__ID_INT) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Above 'if' condition prevent this diag test from running on 'Controller' yet allowable for any other devices, e.g. 'Bot'."
            )
            if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Autonomous__ID_INT) {
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "Just entered the above_conditioned 'if then' state and will process accordingly as needed:"
                )
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Test__ID_INT
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Left Only"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        50,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . # . . .
                            # # # . .
                            . # . . .
                            . # . . .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Right Only"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        50
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . # .
                            . . # # #
                            . . . # .
                            . . . # .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: Left + Right"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "50% Power for Medium Speed"
                        )
                        quest_Note_2.quest_Show_String_For_Note_Small_Func(
                        "0% Power for Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        50,
                        50
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . # . # .
                            # # # # #
                            . # . # .
                            . # . # .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int != _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: All Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            `)
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Continue Current State for Time Below"
                        )
                        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(3, quest_Time_Units_Enum.Seconds)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                if (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Reset__ID_INT) {
                    if (true) {
                        quest_Note_3.quest_Show_String_For_Note_Small_Func(
                        "Servo_Motors: All Stop"
                        )
                        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
                        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
                        0,
                        0
                        )
                    }
                    if (true) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: Begin"
                        )
                        display.rotateTo(display.Direction.UpsideDown)
                        basic.showLeds(`
                            . . . . .
                            . . . . .
                            . . . . .
                            . . . . .
                            . # . # .
                            `)
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "From Driver's Viewpoint, Bot's micro:bit is upside_down so set Led_Display_Screen likewise: End"
                        )
                        display.rotateTo(display.Direction.Normal)
                    }
                }
                quest_Note_2.quest_Show_String_For_Note_Small_Func(
                "Just exited the above_conditioned 'if then' state and will process accordingly as needed:"
                )
                _system_Sw_ModeState__Now__Id_Int = _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT
            }
        }
    }
})
let servoArm_Right_Up_Bool = false
let servoArm_Left_Up_Bool = false
let servoArm_Right_UP_DEGREES_INT = 0
let servoArm_Left_UP_DEGREES_INT = 0
let servoArm_DOWN_DEGREES_INT = 0
let motor_Power_Gear_02_MAX = 0
let motor_Power_Gear_01_MAX = 0
let _system_Sw_ModeState__Test__ID_INT = 0
let _system_Sw_ModeState__Autonomous__ID_INT = 0
let screen_Delay_MSEC_INT = 0
let motor_Power_Gear_Number_Int = 0
let motor_Power_ZERO_INT = 0
let motor_Power_Half_Current = 0
let motor_Power_Full_Current_Neg = 0
let motor_Power_Full_Current_Pos = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__AsIncremented_By__Int = 0
let controller__Polar_OriginAtCenter__AngleDegree__Int = 0
let controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT = 0
let _system_Sw_ModeState__Reset__ID_INT = 0
let screenBrightness_Heartbeat_Count_Int = 0
let screen_XY_Brightness_Old_Num = 0
let screen_Y_Old_Num = 0
let screen_X_Old_Num = 0
let network_GroupChannel_MyBotAndController_Base0_Int = 0
let _system_Sw_ModeState__Now__Id_Int = 0
let _system_Sw_ModeState__Edit_GroupChannelNum__ID_INT = 0
let _system_Hw_DeviceType__Now__Id_Int = 0
let _system_Hw_DeviceType__Null__ID_INT = 0
let _system_Hw_DeviceType__Controller_Joystick__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT = 0
let _system_Hw_DeviceType__Bot__ID_INT = 0
let _system_Sw_ModeState__Null__ID_INT = 0
let _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Hundreds__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Tens__Int = 0
let network_GroupChannel_MyBotAndController_Base0__Digit_Ones__Int = 0
if (true) {
    quest_Note_1.quest_Show_String_For_Note_Big_Func(
    "©️ 2024 Quest Institute. All rights reserved."
    )
    quest_Note_3.quest_Show_String_For_Note_Big_Func(
    "Bot & Controller_Joystick: All_in_One Code"
    )
    if (true) {
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Set GroupChannel_# (Bot_Id): Range [21 to 255], Default = 1"
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Func(
        "Following Block_Code Moddable"
        )
        network_GroupChannel_MyBotAndController_Base0_Int = 1
    }
    if (true) {
        setup_VariablesAndConstants_UserCustomizableNot_Func()
        setup_Network_Func()
setup_BotAndController_Func()
    }
    if (true) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 1: Variables_n_Constants_Not (Hardcode)"
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "For exclusive activation, place this 'on start' stack higher than other 'on start' stacks"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "Bot & Controller_Joystick Stack: 'on start'"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "setup_VariablesAndConstants_UserCustomizable: Yes"
        )
    }
}
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Joystick"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (true) {
                controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOf_AsIntOut_Func(
                quest_Controller_Joystick_Directional_AngelDegree_Increment_Enum.degree_90
                )
                controller__Polar_OriginAtCenter__MagnitudePixel__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_MagnitudePixel_AsIntOut_Func(
                )
                if (false) {
                    controller__Polar_OriginAtCenter__AngleDegree__Int = quest_Sensors.quest_Get_Controller_Joystick_Directional_AngleDegree_IncrementOfDegree90_AsIntOut_Func(
                    )
                }
            }
            quest_Note_1.quest_Show_String_For_Note_Big_Func(
            "Convert Network Message to Operate 'B'ot: "
            )
            if (controller__Polar_OriginAtCenter__MagnitudePixel__Int >= controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Big_Func(
                    "Motion: Yes"
                    )
                    if (controller__Polar_OriginAtCenter__AngleDegree__Int == 90) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: North"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block More as Visual Comment Since very Laggy"
                                )
                                basic.showLeds(`
                                    . . # . .
                                    . # # # .
                                    . . # . .
                                    . . # . .
                                    . . . . .
                                    `)
                            } else {
                                radio.sendString("forward")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 0)
                            }
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 270) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: South"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block More as Visual Comment Since very Laggy"
                                )
                                basic.showLeds(`
                                    . . . . .
                                    . . # . .
                                    . . # . .
                                    . # # # .
                                    . . # . .
                                    `)
                            } else {
                                radio.sendString("backward")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 4)
                            }
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 180) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: West"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block More as Visual Comment Since very Laggy"
                                )
                                basic.showLeds(`
                                    . . . . .
                                    . # . . .
                                    # # # # .
                                    . # . . .
                                    . . . . .
                                    `)
                            } else {
                                radio.sendString("left")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(0, 2)
                            }
                        }
                    } else if (controller__Polar_OriginAtCenter__AngleDegree__Int == 0 || controller__Polar_OriginAtCenter__AngleDegree__Int == 360) {
                        if (true) {
                            quest_Note_1.quest_Show_String_For_Note_Big_Func(
                            "Controller_Joystick: East"
                            )
                            if (false) {
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "Following Block More as Visual Comment Since very Laggy"
                                )
                                basic.showLeds(`
                                    . . . . .
                                    . . . # .
                                    . # # # #
                                    . . . # .
                                    . . . . .
                                    `)
                            } else {
                                radio.sendString("right")
                                screen_Clear_Func()
                                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                                )
                                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(4, 2)
                            }
                        }
                    } else {
                        quest_Note_5.quest_Show_String_For_Note_Small_Func(
                        "Invalid 'controller_Joystick_Angle_Degrees_AsIncremented_Int'"
                        )
                        error_Message_Func("2024-0212-1731", "Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'")
                    }
                    if (false) {
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
                        )
                        quest_Note_1.quest_Show_String_For_Note_Small_Func(
                        "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
                        )
                    }
                }
            } else if (controller__Polar_OriginAtCenter__MagnitudePixel__Int < controller__Polar_OriginAtCenter__MagnitudePixel__IdleDeadzone_Max512__INT) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Motion: Not"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Zero values if not exceed 'Deadzone_AsIdle'"
                )
                radio.sendString("stop")
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                    )
                    screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 2)
                }
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes ~ Yes: 1-Sec Lag 'show leds'"
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Func(
        "Activate Stack via 'Forever' Stack_Header"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 1of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
    }
})
basic.forever(function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Big_Func(
        "Send Network Message to 'B'ot:: Controller_Joystick: Buttons"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Func(
        "Controller_Joystick Stack: Main 2of2"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Network Message Max_Character_Length: 19"
        )
        // //jwc o if (device_Type_Controller_Bool && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
        if (_system_Hw_DeviceType__Now__Id_Int == _system_Hw_DeviceType__Controller_Joystick__ID_INT && (_system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_01_DeviceType__ID_INT || _system_Sw_ModeState__Now__Id_Int == _system_Sw_ModeState__Run__AndShow_02_GroupChannelNum__ID_INT)) {
            if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Controller_Joystick: gear_lo"
                )
                motor_Power_Gear_Number_Int = 1
                radio.sendString("gear_lo")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 3)
            } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
                quest_Note_1.quest_Show_String_For_Note_Big_Func(
                "Controller_Joystick: gear_hi"
                )
                motor_Power_Gear_Number_Int = 2
                radio.sendString("gear_hi")
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                screen_PlotNewDot_ClearOldDot_WithHeartbeat_Func(2, 1)
            }
            network__CpuCycle_Post__Management_Func()
        }
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Level 2.1: Variables_n_Constants_Yes"
        )
    }
})
loops.everyInterval(3600000, function () {
    quest_Note_5.quest_Show_String_For_Note_Small_Func(
    "Above stack is practically a 'non-executing' stack that does not tie up cpu_resources with its 1 hour (3600,000)"
    )
    quest_Note_5.quest_Show_String_For_Note_Small_Func(
    "Also the 'if(false)' mini-stacks will be skipped by cpu, for further non-resource burdening"
    )
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Very Important Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Levels 1, 2, 2.1"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 1: Hardcoded Static via Actual_Numbers for MotorPower%"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2: Softcoded Dynamic via Variables/Constants for MotorPower% "
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "* Level 2.1 Add Controller_Joystick * Level 2.2 Add Gear 3 (90%?)"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Basic Comment_Colors Usage:: Black: Very Big Picture, Blue: Big Picture, Green: Following Block_Code Moddable, Orange: Question/TODO, Magenta: Special Multi-Purpose "
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "micro:bit Ver2 Warning during Download is Ignorable Yet Courteously Helpful"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'if_then' mini-stacks useful for modular 3-D code select/duplicate/move/delete"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Light_Gray Functions non-editable (backend staff-use code only)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "For Group_CHannel_# (Bot_Id): Propose: 1-10 Staff Use, 11-99 Student Use"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "SW Reset: Long_Press Logo for 3 sec min"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Built-in Diagnostic Test: Short_Press Logo for 1 sec max"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Blocks' Window homes 'on start'_stack as top_left corner of editor_screen, until 'on start' is moved below, then next stack to right presides"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "All These Levels are Intermediate Level Coding due to Networking Pairing Involved.  Basic Diagnostic Servo_Motors (Autonomoous) is Beginner Level."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "This Intermediate Level Network_Pairing has 1sec_Lag Response Time; The Other Advanced Level Network_Pairing has Real_Time Response Time."
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "For Level 1, can keep 'Forward: set manual_servo_motors' Block functional, yet reset to 0 all other 'set manual_servo_motors' Blocks for Discovery Learning"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Func(
        "If duplicate stacks exist, then the highest stack is active and others are non_active"
        )
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Important Notes"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Upon open file, Editor zooms in on closest stack to right of original_origin from project_creation"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Semantic Naming prefers '_' vs. '-' since latter can be conufused with minus_sign"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'every 360000 ms' (1 hour) Stacks can be ignored, esp w/ 'if false' embedded"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Avoid using 'show leds' Block since will cause lag & degrade real-time response"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Seems like 'signficant' changes to JavaScript can activate 'format code', rearrange stacks to original position"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Important 'system' variables are 1) _system_Hw_DeviceType__* (Hw=Hardware) and 2) _system_Sw_ModeState__* (Sw=Software)"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "If Buttons C-F for Gears/Misc, Maybe 'Logo Up/Down' for 'Servo_Arm Up/Down'"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "'Rotatedisplay' could be used on Bot's Led_Screen, but causes light flickering on bottom row, so maybe avoid"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "Reliable/Faster Response If Screen_Led_Graphics After Important Action Blocks Above"
        )
        if (false) {
            quest_Note_3.quest_Show_String_For_Note_Small_Func(
            "Main upgrade from Lv1 to Lv2 is replacing cpu_laggy 'show leds' block with cpu_fast 'plox x _ y _' block, such as below: "
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "West"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(4, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "North"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 0)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "East"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 4)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "South"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(0, 2)
            } else if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Idle: Neutral"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "LED 5x5 Screen: (0,0) @ Upper_Left -&- (4,4) @ Bottom_Right"
                )
                led.plot(2, 2)
            } else {
                if (true) {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Lo"
                    )
                    led.plot(2, 3)
                } else {
                    quest_Note_1.quest_Show_String_For_Note_Small_Func(
                    "Gear: Hi"
                    )
                    led.plot(2, 1)
                }
            }
        }
    }
    if (false) {
        quest_Note_6.quest_Show_String_For_Note_Big_Func(
        "Staff: Notes"
        )
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Following Bug Resolved: TYJ"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "////jwc n may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at Blocks: on start stack: root level: error_Message_Func(\"2024-0212-1730\", convertToText(controller__Polar_OriginAtCenter__AngleDegree__Int))"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "Fix: 'error_Message_Func(\"2024-0212-1730\", \"Invalid 'controller__Polar_OriginAtCenter__AngleDegree__Int'\")'"
            )
            if (false) {
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "KINDLY IGNORE:: COMPILER ISSUE: NEED FOLLOING UNUSUAL VARIABLE DECLARATION BY COMPILER"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Following Always First Line of This 'on start' Stack by Compiler."
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "Can Move Anywhere on Same Stack, But Needs to Stay Root Level (Main_Stack), e.g. Not Nested in Sub/Mini_Stack"
                )
                quest_Note_1.quest_Show_String_For_Note_Small_Func(
                "* Current variable below is: 'controller__Polar_OriginAtCenter__AngleDegree__Int'"
                )
            }
        }
        if (false) {
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? cause compiler to auto-create weird code below from 'convert_Controller_Joystick_Directional_AngleDegrees__To__Microbit5x5Screen_Func(controller__Polar_OriginAtCenter__AngleDegree__Int)'"
            )
            quest_Note_1.quest_Show_String_For_Note_Small_Func(
            "jwc ? may cause compiler bug, auto_creates 'let controller__Polar_OriginAtCenter__AngleDegree__Int = 0' at inactive free space"
            )
        }
        quest_Note_1.quest_Show_String_For_Note_Small_Func(
        "When activating a 'on Radio Received' stack, replace 'receivedString_TO_BE_REPLACED_BY_ONrADIOrECEIVED_STACK' with 'receivedString'"
        )
    }
})
