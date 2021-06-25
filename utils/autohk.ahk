^!p::
Send ^c
;Send !{Tab}
WinActivate, ahk_exe Notepad2.exe
Sleep, 100
page := RegExReplace(clipboard, "[^0-9]")
Send, {Esc}
Send ^{Home}
Send ^f
Send %page%
Send {Enter}
Send {Esc}

