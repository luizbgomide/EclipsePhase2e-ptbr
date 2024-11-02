# Hacking

In the digital realm, everything has a vulnerability. Software is the classic plan that never survives contact with the enemy. Hackers are continuously scouting for flaws in code that will allow them to exploit it for unintended purposes. As quickly as these flaws are discovered and patched, new ones are discovered and leveraged for advantage.

Hackers routinely share, trade, and sell their exploits online. The best of these make their way into pre-packaged exploit app libraries — software tools that scan a target, openly or with subtlety, probe it for vulnerabilities, and automatically execute attacks.

There are many methods you may use to hack a system. The first is to circumvent the [authentication](05-authentication-and-encryption.md) on a legitimate account, but this requires background knowledge of the account and takes time and special effort. The second is to [sniff](04-devices-apps-and-links.md#sniffing) the traffic of a legitimate user and remotely [spoof commands](05-authentication-and-encryption.md#spoofing), which can be powerful but limited. The most common method of hacking is to directly gain access to the target ([Intrusion](#intrusion)) and subvert it from within ([Subversion](13-system-subversion.md)).

## Hacking Tests

Almost all intrusion and subversion efforts rely on Hacking Tests. This opposed test pits the hacker’s Infosec skill against the target’s [Firewall Rating](12-countermeasures.md#firewall-ratings) — or the defender’s Infosec skill if the system is [actively defended](12-countermeasures.md#active-defense). If the hacker wins, they pull off their intended action, otherwise their action fails.

## Intrusion

The art of intrusion involves penetrating a system’s security, taking advantage of code glitches and flawed security protocols to bypass the target’s defenses. The best methods involve infiltrating a system slowly and quietly, without catching a watchdog’s attention. When called for, however, a hacker can toss aside pretenses and attempt to brute-force their way in.

### Establishing a Connection

In order to hack a system, you must establish a direct connection to the target. If you are making a direct wireless connection, the target system must be wireless-capable and within wireless radio range, and you must know the target is there ([Stealthed Signals](04-devices-apps-and-links.md#stealthed-signals)). If the system is hardwired, you must physically jack in by using a regular access port (or skinlink, if the system is so equipped) or tap into a cable that carries the system’s traffic (requiring a Hardware: Electronics Test and appropriate equipment, such as an electronics kit). If you are accessing the target through the mesh, the system must be online and you must know its mesh ID or otherwise be able to find it through research or tracking.

### Brute-Force Attacks

Brute-force hacking is quick, messy, and loud. You select the target, trigger your exploit app, and let it quickly and methodically cycle through attacks against the most common vulnerabilities. Brute-force intrusions require only a complex action, meaning they can be a relevant factor even in combat scenarios. However, the target is almost always alerted to the digital invasion.

To brute-force a target, make a Hacking Test. The intruder suffers a −30 modifier. If you succeed, you have gained access to the target system with user-level [access privileges](05-authentication-and-encryption.md#accounts--access-privileges) and spotted status ([Intruder Status](#intruder-status)), and the system goes on active alert ([Security Alerts](12-countermeasures.md#security-alerts)). Each superior success increases your privileges one step (first to security then to admin level). On a critical success, you have [covert status](#covert), but a [passive alert](12-countermeasures.md#passive-alert) is still triggered. In this situation, both superior and critical results take effect simultaneously. If you lose the opposed test, you fail to get in and the system goes on [passive alert](12-countermeasures.md#passive-alert).

### Subtle Intrusion

The preferred method of owning a target is to quietly and systematically probe it, analyze its setup and software, and determine the most likely vulnerabilities. Subtle intrusion is a task action with a timeframe of 1 hour (GMs may alter this timeframe for heavily secured or unprotected systems). Make a Hacking Test. If you succeed, you have gained access to the target system with user-level [access privileges](05-authentication-and-encryption.md#accounts--access-privileges) and covert status ([Intruder Status](#intruder-status)). Each superior success increases your privileges one step (first to security then to admin level). On a critical success, you have [hidden status](#hidden); the defender remains unaware of the intrusion. Both superior and critical results may apply.

If the firewall succeeds but loses the opposed test, a passive alert is triggered ([Security Alerts](12-countermeasures.md#security-alerts)). If the firewall wins the opposed test, you fail to get in and the system goes on [passive alert](12-countermeasures.md#passive-alert).

### Joint Hacking

You can cooperate with others while hacking: one person takes the lead, using their connection, while the others take actions to support, providing a [teamwork bonus](../03/01-how-to-play.md#teamwork). Only the lead hacker may use pools, and only they are targeted by [countermeasures](12-countermeasures.md).

Alternatively, multiple hackers can separately hack the same system simultaneously. While their actions are handled separately, if any of them trigger an alert, all intruders on the system will be affected.

### Hacking Again

If you have successfully hacked into a system once, you receive a +30 bonus on Hacking Tests to intrude into the system again, until a [security audit](12-countermeasures.md#security-audits) patches the vulnerability. You may also provide this bonus to others by sharing the exploit used.

## Intruder Status

Intruder status is a simple way of measuring a hacker’s situation as they invade a system — have they caught the attention of defenses or do they remain unobtrusive? Intruder status is first determined when you access a system, though it may change according to events. Note that intruder status is a separate matter from account [access privileges](05-authentication-and-encryption.md#accounts--access-privileges). The latter represents your permissions and what you are allowed to do on a system. The former indicates the system’s awareness of your true nature as an intruder.

### Hidden

If your status is hidden, the system is completely unaware of your presence and cannot act against you. Your actions are not recorded in logs and other users cannot detect you. Your presence may leave some traces, but they will require thorough analysis and time to find.

While hidden, you receive a +10 modifier on any efforts to [subvert the system](13-system-subversion.md).

### Covert

With covert status, your presence on the system looks legitimate and doesn’t attract any unusual attention. Only extensive checking will turn up abnormalities. The system is aware of you, but does not consider you a threat.

### Spotted

If you have spotted status, the system is aware that your presence is an intrusion. Spotted automatically triggers an [active alert](12-countermeasures.md#active-alert).

## Changing Status

Your intruder status will change depending on your actions and the actions of the system.

### Upgrading Status

You can attempt to improve your status to better hide yourself from the system. This requires a complex action and a Hacking Test. If you win, you can upgrade your status by one level (spotted to covert or covert to hidden). A superior success can take this one level further.

Note that changing your status does not affect the system’s alert status. If you go from spotted to covert or hidden, the system is still aware there was an intrusion, it just can’t currently pinpoint you.

### Exposure

Any time you use Infosec skill and engage in hacking while within a system, you run the risk of exposing yourself to the system’s security. If you roll a superior failure on a Hacking Test, you trigger a [passive alert](12-countermeasures.md#passive-alert). This may instigate the system defender to take a closer look.

If you roll a critical failure on a Hacking Test, you automatically switch your status to spotted and the system goes on [active alert](12-countermeasures.md#active-alert).

If you attack a target in [mesh combat](14-mesh-combat.md), you must also make a Hacking Test or trigger a passive alert.

### Zeroing In

If a system is on passive alert, the system defender may attempt to pinpoint intruders. This requires a complex action and an Opposed Infosec Test between defender and each hacker. If the hacker is hidden, the defender incurs a −30 modifier. If the defender wins, the hacker’s status becomes spotted and the system goes on active alert.

<blockquote>

## Consolidated Hacking

Sometimes a PC may want to hack a system that is less consequential to the story. Rather than running each hack step-by-step, the GM can consolidate such a hack into a single task action Infosec Test. First, the hacker should compile a brief list of objectives after hacking in (e.g., locate a file, unlock a door, loop a sensor feed, eliminate traces). Set a timeframe of 1 hour plus 10 minutes per objective. If brute forcing, the timeframe is 2 action turns per objective. Apply the following modifiers: −30 if brute forcing, +10 if hacking a mote, −10 if hacking a server, and −10 if hacking multiple systems.

| Infosec Test Result | Hacking Result                                                        |
| :------------------ | :-------------------------------------------------------------------- |
| Critical Failure    | Hack fails, hacker traced.                                            |
| Superior Failure    | Hack fails.                                                           |
| Failure             | Hacker achieves first objective only.                                 |
| Success             | Hacker achieves all objectives.                                       |
| Superior Success    | Hacker achieves all objectives in 25% less time per superior success. |
| Critical Success    | Hacker achieves all objectives, backdoors system.                     |

</blockquote>
