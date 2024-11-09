# Mesh Actions

Your actions online are largely influenced by the particular system(s) you are accessing. The following list is not comprehensive, but should give you and your GM a basis for handling online tasks.

Keep in mind that your actions are limited by your current [access privileges](05-authentication-and-encryption.md#accounts--access-privileges). If you wish to do something that your privileges do not allow — access a file in a restricted directory, edit a log, manipulate a security device — then you must hack the system to do so. Actions that specifically require hacking are detailed under [Hacking](11-hacking.md), and [Subversion](13-system-subversion.md).

Unless otherwise noted, these actions each take a complex action but require no skill test, assuming you have access privileges.

## Universal Actions

These actions apply to motes, hosts, servers, and most other electronics.

Any user can take these actions, though high-security systems may restrict some of these to users with security or admin privileges.

<!--sort-->

- **Access Another System:** You can [authenticate](05-authentication-and-encryption.md#authentication-methods) and access an account on another system. This creates an [account shell](05-authentication-and-encryption.md#accounts--access-privileges), representing your presence on that system.
- **Apply Tag:** You can mark a physical person, place, or thing with an e-tag viewable in AR ([Tagging](03-common-mesh-uses.md#tagging)).
- **Communicate:** You can email, text, and voice or video chat others online, as long as you have their mesh ID.
- **Encrypt/Decrypt:** You can protect a file from prying eyes or access it with the proper authorization ([Encryption](05-authentication-and-encryption.md#encryption)).
- **Filter AR Mist:** You can attempt to remove spam and other obtrusive AR “mist” ([AR Mist and Filters](03-common-mesh-uses.md#ar-mist-and-filters)).
- **Identify Attacker:** You can try to identify someone trying to crash you in mesh combat ([Attack Awareness](14-mesh-combat.md#mesh-attacks-and-defense)).
- **Issue Command:** You can command any puppeted device, ALI, or teleoperated bot with only a quick action. Each command counts separately, though you may issue the same command to multiple devices/bots at once.
- **Log Off:** Exit a system.
- **Modify Files:** You can view, change, upload, download, and delete any files you have access privileges for. Deleted files can still be recovered with an Interface Test for 1 week, though you can also choose to wipe (permanently delete) a file so that no recovery is possible; however, archived backups may also exist.
- **Operate Device:** Most devices have built-in hardware and electronic functions that you can directly control. Turn on your vehicle, load an autocook blueprint, turn up the heat, turn off the sprinklers, open the door, set a timer, fire a weapon system, adjust settings, etc. At the GM’s discretion, some functions may require skill tests.
- **Run Script:** Launch a pre-programmed script ([Scripting](#scripting)).
- **Scan Wireless Signals:** It is a quick action to look up wireless devices within range and their mesh IDs. It takes a complex action to locate a [stealthed devices](04-devices-apps-and-links.md#stealthed-signals).
- **Search:** You may search a system you are accessing or the mesh at large ([Online Research](09-online-research.md)).
- **Shield Software:** You may actively protect software that is targeted in [mesh combat](14-mesh-combat.md).
- **Stealth Wireless Signals:** You can attempt to hide your wireless activity ([Stealthed Signals](04-devices-apps-and-links.md#stealthed-signals)).
- **Switch Home Device:** If you are an infomorph, you may transfer your virtual mind-state to another system ([Infomorphs](08-infomorphs.md)) or distribute it among several systems ([Distributed Infomorphs](08-infomorphs.md#distributed-infomorphs)).
- **Terminate Software:** You can kill a minor software process you have privileges for and bring it to a stop. If the software belongs to another user or has significance to the story, treat this as an attack in [mesh combat](14-mesh-combat.md).
- **Toggle AR Skin:** You can change the augmented reality that skins the world around you ([Skinning](03-common-mesh-uses.md#skinning)) with a quick action.
- **Toggle Privacy Mode:** You can set your public profile to private or public ([Privacy Mode](01-everyware.md#privacy-mode)) with a quick action. You can also toggle the option to allow police/security to override your privacy settings.
- **Toggle Simulspace:** You may enter or exit a simulspace environment ([Virtual Reality](18-virtual-reality.md)).
- **Use Apps:** Most devices are loaded with apps appropriate to their purpose. These commonly include word processors, graphic design studios, video and audio workstations, and games. Dedicated systems may have apps for habitat system controls and weapon stations. Using these apps may require an Interface or other skill test.
- **Use Service:** You can use software available as a service in the cloud. This usually requires having a subscription to the service, though some are free.
- **View Apps:** You can see both the apps available on the device as well as the ones currently running with only a quick action. Some apps may only be available to specific accounts, according to that system’s privileges.
- **View Profile:** You can view the public social network profile and rep scores of anyone within physical range (or within range of sensors you are accessing), unless they are in [privacy mode](01-everyware.md#privacy-mode).
- **View Sensor Feeds:** Many devices include miniaturized sensors. These can be viewed or streamed directly into your augmented reality. Use Perceive Tests for most sensors; others may require Know Tests (for example: a chem sniffer’s results are analyzed with Know: Chemistry). Sensors used for security purposes are usually limited to accounts with security or admin privileges.
- **View System Status:** Get a report on the system’s “health” and integrity, the status of its built-in functions, the progress of ongoing processes, security alerts/intruder status, and so on.

## Security Actions

Actions reserved for accounts with security or admin privileges.

<!--sort-->

- **Acquire Mesh ID:** You can acquire the mesh ID of anyone accessing the system.
- **Activate Countermeasure:** You may initiate an active [countermeasures](12-countermeasures.md) against an intruder, such as locking them out, tracing them, or initiating a reboot.
- **Attack:** You can attempt to crash software, including account shells, apps, firewalls, infomorphs, operating systems, and services ([Mesh Combat](14-mesh-combat.md)).
- **Bypass Jamming:** You can attempt to temporarily overcome jamming by winning an Opposed Interface Test with the jamming party ([Jam Signals](13-system-subversion.md#jam-signals)). If successful, you get a short transmission through (3 seconds, +3 per superior success).
- **Locate Intruder:** If you suspect a hacker has invaded your system, you can attempt to identify them ([Locate Intruder](12-countermeasures.md#locate-intruder)).
- **Lockout:** You can block a specified mesh ID from accessing the system. If that mesh ID is currently accessing the system, its account shell must be crashed in mesh combat first.
- **Monitor Activity:** You can spy on an app’s activity or another specific user’s actions in real-time. If the user is hacking the system, this may require winning an Opposed Infosec Test to ascertain what they are doing. Hackers sometimes use this to monitor the firewall or system defender.
- **Scan Infomorph:** You can analyze an infomorph with a successful Interface Test. This will tell you the type of infomorph, its public profile (if not private), its mesh ID, and whether or not it is an ALI or a fork. A more in-depth analysis takes an Interface Test and a timeframe of 10 minutes, but will reveal its [digital code ID](../15/07-identity-systems.md#digital-code) and any embedded apps or meshware. If the infomorph has e-veil meshware, this is an opposed test against the veil’s Program 80.
- **Trace:** You can track a user to their physical location (or at least the system they originate from); see [Physical Tracking](10-tracking.md#physical-tracking).
- **Trigger Alert:** You can put the system on passive or active alert.
- **View Logs:** Access the system’s logs. This will tell you when users accessed the system, what apps they used, what files they viewed or modified, what linked systems they accessed, their mesh IDs, what other devices were in wireless range at what times, and similar forensic histories. Older logs (over a month) are often backed up to a cloud service and erased. Searching for specific information may require a Research Test.
- **View Users:** You can see which other users are currently accessing the system, what apps they are using, and their mesh IDs. Intruders with hidden status will not be shown.

## Admin Actions

Only admin accounts are allowed to take these actions.

<!--sort-->

- **Disable Sensors or Device Functions:** You can turn off sensors or other physical functions. This may keep someone with physical access to the device from using it.
- **Modify Accounts:** You can add new accounts and remove old ones. You cannot remove accounts that are currently being accessed — the user must completely log off first (or have their account shell crashed in mesh combat). Every device has a root admin account that cannot be removed (short of wiping the system).
- **Modify Privileges:** You can add or remove specific privileges, such as allowing access to certain directories, files, sensors, or apps. You can also downgrade security accounts to user privileges or elevate users to security accounts and security accounts to admins. You can remove or downgrade admin privileges from other accounts, however every device has a root admin account that cannot be modified (with ware, this usually means the person they are installed in).
- **Modify Software:** You can install, remove, and update apps.
- **Wipe System:** You can completely erase all data from the system: all files, apps, accounts, infomorphs, and the operating system itself. This is a lengthy process, taking 1 minute for motes, 3 minutes for hosts, and 10 for servers. Infomorphs are immediately warned, so that they have time to copy themselves or move to a new home device. Forensic methods (an Interface Test) can be used to recover wiped data, at least until the system is re-installed, unless you choose to securely wipe the system (double the time).

## Scripting

A script is a simple program — a batch of instructions — that you can embed in a system to be executed at a later scheduled time or upon a certain trigger event, without your presence. When activated, the script will undertake a series of pre-defined actions, in order. Scripts are commonly used by hackers to subvert a system while they are occupied elsewhere, but they can also be used with your own systems (though it is usually easier to tell ALIs what to do).

Scripts can be programmed on the fly or pre-programmed. When composing the script, you must detail what actions the script will take, in what order, and at what times (or trigger events). The script cannot contain more steps/tasks than your Program skill ÷ 10. To program a script, you must succeed in a Program Test with a timeframe of 1 hour per step. Superior successes provide 1 point of Insight pool that the script may use for making tests.

To load a script into a system, you must have the necessary access privileges or must succeed in a [Hacking Test](11-hacking.md#hacking-tests). If successful, the script is loaded into the system and will run as programmed. Once the script is activated, it carries out the pre-programmed sequence of actions. The script is considered to have the same access privileges as the account that runs it. The programmer’s Infosec, Interface, and Research skills are used for any tests called for by those actions, but only the script’s own Insight pools may be used.

Scripts may be discovered in [security audits](12-countermeasures.md#security-audits).
