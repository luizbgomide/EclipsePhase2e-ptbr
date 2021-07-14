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
return

^!s::
Clipboard := "" ; Must be blank for detection to work.
Send ^c
ClipWait 2
if ErrorLevel
    return
Clipboard := StrReplace(Clipboard, ", ", "`n")
Sort Clipboard
Clipboard := StrReplace(Clipboard, "`n", ", ")
Send ^v
return