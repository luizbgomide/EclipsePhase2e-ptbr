# Mesh Combat

Mesh “combat” is an abstraction. Unlike physical combat, there are no dueling avatars, no digital maneuvering, no deadly programs. Mesh combat represents efforts to undermine the stability of software — infomorph mind-states (including cyberbrains), account shells, apps (including the firewall), or operating systems themselves — forcing them to crash. Mesh combat follows the normal rules for combat, as described below.

## Local vs. Remote

Mesh attacks are either local (against a target on the same system) or remote (against a separate system entirely).

### Local Attacks

To attack a local target in the mesh, you must have access to the system it is running on. This may require you to locate and hack the system first. For example, if an infomorph using a remote server as their home device hacks into your mesh inserts, you can attack their account shell on your implants. You would not be able to attack the infomorph directly, however, unless you were to trace it back to its home server, hack in, and attack it there.

### Remote Attacks

You may attack the operating systems of remote devices by flooding them with traffic and malformed packets designed to create instability. In essence, you are targeting an entire remote device with a denial-of-service attack, hoping to impede or crash it. Account shells, apps, cyberbrains, and infomorphs cannot be remotely targeted.

## Mesh Attacks and Defense

You attack a local or remote target by attempting to destabilize its underlying software processes. Take a complex action and roll Infosec skill. For a local attack, if you do not have admin privileges, you suffer a −30 modifier.

If a system defender is actively shielding the target ([Shield Software](06-mesh-actions.md#universal-actions)), this is an opposed test against their Infosec skill. If not, it is a standard success test. Remote attacks are opposed by the Firewall rating (or the defender’s Infosec skill if actively defended).

**Attack Awareness:** It is not automatically apparent where a mesh attack originates from — or even that it is underway. If you, your software, or the operating system of the device you are accessing/running on take damage or wounds, you will experience this as malfunctioning software — an unfortunately common occurrence, even in Eclipse Phase. If you suspect you are under attack, you may take a complex action and make an Infosec Test to identify the attacker and their mesh ID.

Firewalls are trained to detect mesh attacks. Any time an intruder makes a mesh attack, they must also make a Hacking Test. If they lose, a passive alert is triggered.

## Mesh Damage and Armor

If your attack wins, you inflict damage. A standard mesh attack inflicts DV 2d10. Some special apps or circumstances may modify this damage. Each superior success inflicts an extra 1d6 damage. Critical successes mean damage is doubled.

Some hardened apps, infomorphs, and systems have built-in redundancies to protect against mesh attacks. This counts as “armor” and is subtracted from the damage roll.

## Mesh Wounds

If the damage inflicted upon you exceeds your software’s Wound Threshold, a wound is inflicted. In mesh combat, wounds represent broken processes, instability, memory leaks, and other errors. Each wound inflicts a cumulative −10 modifier to all actions.

Unlike physical wounds, mesh wounds do not trigger checks for knockdown or unconsciousness.

**Optional Rule:** For each wound, there is a cumulative 10% chance you suffer a [glitch](16-glitches.md); roll each time a wound is inflicted.

## Mesh Durability

Software that accumulates damage equal to or exceeding its Durability immediately crashes and ceases to function. All data transfers and other ongoing processes immediately stop. If your account shell crashes, you are booted from the system (though you may attempt to log or hack back in). Crashed infomorphs may no longer act. If a cyberbrain crashes, the morph itself freezes or collapses. If a service or operating system crashes, all users are disconnected (including the attacker) and any other processes ongoing on the system come to a halt.

Infomorphs, cyberbrains, services, and operating systems automatically [reboot](12-countermeasures.md#rebootshutdown), which takes 1d6 action turns. Rebooting eliminates all accumulated mesh damage and wounds.

Software (except for account shells) may still be attacked after it has crashed. This represents attempts to irretrievably damage the code so that it may no longer run. If software accumulates damage equal to or exceeding its Death Rating, it is permanently corrupted. Apps and services must be reinstalled. Cyberbrains and devices must be repaired or replaced. Infomorphs and the egos within cyberbrains are effectively dead. Damage and wounds inflicted on crashed software are applied when it reboots.

**Distributed Infomorphs:** Infomorphs that are distributed must evenly split their Durability between devices. Wound Threshold remains unchanged, but a wound is inflicted if your distributed presence on any device (or the device itself) is crashed.

<blockquote class="table">

### Mesh Durability

<!--sort-->

| Software                                              | Wound Threshold | Durability | Death Rating |
| :---------------------------------------------------- | :-------------: | :--------: | :----------: |
| Account Shell                                         |        3        |     15     |      NA      |
| ALI                                                   |        4        |     20     |      40      |
| App                                                   |        2        |     10     |      20      |
| <!--sort-union--><p class="indent">» Firewall App</p> |        6        |     30     |      60      |
| Cyberbrain                                            |        7        |     35     |      70      |
| Infomorph                                             |                 |            |              |
| <!--sort-union--><p class="indent">» Digimorph</p>    |        5        |     25     |      50      |
| <!--sort-union--><p class="indent">» Agent</p>        |        8        |     40     |      80      |
| <!--sort-union--><p class="indent">» Ikon</p>         |        6        |     30     |      60      |
| <!--sort-union--><p class="indent">» Operator</p>     |        7        |     35     |      70      |
| Operating System                                      |                 |            |              |
| <!--sort-union--><p class="indent">» Mote</p>         |        4        |     20     |      40      |
| <!--sort-union--><p class="indent">» Host</p>         |        8        |     40     |      80      |
| <!--sort-union--><p class="indent">» Server</p>       |       12        |     60     |     120      |

</blockquote>

## Mesh Damage Repair

Damage and wounds to apps cannot be repaired; the app must be rebooted to remove errors. Infomorphs, cyberbrains, account shells, and operating systems have built-in redundancy settings that will fix broken processes and correct errors over time. Such software will repair either 1d10 damage or 1 wound per minute; all damage must be fixed first.
