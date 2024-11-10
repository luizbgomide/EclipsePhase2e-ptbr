# Ranged Combat

Ranged combat attacks fall into five categories: beam weapons, kinetic weapons, seeker weapons, spray weapons, and weapon systems. Each is described below.

Most ranged weapons are constructed from lightweight but hardy ceramic hybrids and refractory metals. They are designed for ambidextrous use and equipped with [safety systems, smartlink systems](13-weapon-accessories.md), and helper ALIs that automatically mesh with the wielder for firing assistance, target recognition, and tactical networking.

## Ranged Combat Rules

The following rules apply to all types of ranged attacks.

<!--sort-->

### Aiming

If firing in single-shot or semi-auto mode, you can expend your quick action to aim. Apply a +10 modifier to your attack.

You can also expend an entire complex action to fix your aim on a target. As long as the target remains in your sights on your next action, you receive +30 to hit.

### Ammunition and Reloading

Every weapon lists an ammunition capacity that indicates how many shots the weapon holds. When this ammo runs out, a new supply must be loaded. Keep track of the shots you fire. Reloading requires a complex action, whether you are slapping in a new magazine of bullets or a fresh battery for a laser. Weapons listed with an Ammo of x + 1 indicate that you can load an extra round in the chamber.

Reloading aside, you are assumed to carry enough standard ammo or batteries that you will not run out. You should, however, keep track of smart and specialty ammo, seeker missiles, and larger ammunition. Likewise, in remote locations or situations where you are isolated from resources, the GM may have you track the ammo you use.

### Firing Modes

Ranged weapons have one or more firing modes that determines their rate of fire:

**Single Shot (SS):** Single-shot weapons only fire one shot per action turn (no matter how many actions you take). These are typically larger or more complex devices.

**Semi-Automatic (SA):** Semi-automatic weapons are capable of quick, repeated fire. You shoot once with each complex action.

**Burst Fire (BF):** Burst-fire weapons release a burst of shots with a single trigger pull. You can shoot a burst against a single target (concentrated fire) or against two targets who are standing within one meter of each other. In the case of concentrated fire, you can choose either a +10 modifier to hit or increase the DV by +1d10. In the case of two adjacent targets, make a single attack test against both. Firing a burst is a complex action. Each burst uses up 3 shots.

**Full Automatic (FA):** Full-auto weapons release a hail of shots with a single trigger pull. You can attack a single target with concentrated fire or up to three separate targets within one meter of each other. In the case of concentrated fire, choose either a +30 modifier to hit or increase the DV by +2d10. In the case of adjacent targets, make a single attack test against all of them. Full-auto fire is a complex action. Firing in full-auto mode consumes 10 shots.

<blockquote class="table">

<!--sort-union-->

### Firing Modes

| Mode                                           | Effect                                                |
| :--------------------------------------------- | :---------------------------------------------------- |
| Single Shot                                    | Standard DV                                           |
| Semi-Auto                                      | Standard DV                                           |
| Burst Fire                                     |                                                       |
| <p class="indent">» Single Target</p>          | +10 to hit or +1d10&nbsp;DV                           |
| <p class="indent">» Two Adjacent Targets</p>   | Standard DV to both                                   |
| Full Auto                                      |                                                       |
| <p class="indent">» Single Target</p>          | +30 to hit or +2d10&nbsp;DV                           |
| <p class="indent">» Three Adjacent Targets</p> | Standard DV to all three                              |
| <p class="indent">» Suppressive Fire</p>       | Standard DV to anyone moving out of cover within cone |

</blockquote>

### Indirect Fire

With the help of a spotter, you can target an enemy that you can’t see using indirect fire. Indirect attacks are primarily made with seekers, grenades, and other projectiles that do not follow a direct-line trajectory to the target. You must be meshed with a character, bot, tactical network, or sensor system that has the target in its sights and which feeds you targeting data. Indirect attacks suffer a −20 modifier.

[Seeker missiles](10-seeker-weapons-and-grenades.md) can home in on a target that is “painted” with reflected energy from a [laser sight](13-weapon-accessories.md) or similar target designator system. An “attack” must first be made to paint the target with the laser sight using Guns skill. If successful, the target acquisition negates the −20 indirect fire modifier for the seeker launcher’s attack test. The target must be held in the spotter’s sights (requiring a complex action each turn) until the seeker strikes.

### Range

Every ranged weapon has a range rating, indicating the distance to which it is optimally effective. Attacks are broken down into four categories, each with their own modifier:

- **Point-Blank:** 2 meters or less. +10 to hit. Cone weapons inflict +1d10&nbsp;DV.
- **Close:** 10 meters or less. No modifier to hit. Cone weapons inflict +1d10&nbsp;DV.
- **Range:** Up to the weapon’s range rating in meters. −10 to hit.
- **Beyond Range:** An additional −10 modifier per range multiple. For example, a target at 200 meters with a range 50 weapon would be −40 to hit. Additionally, kinetic and cone weapons hit targets beyond range at −1d10&nbsp;DV, unless in vacuum.

**Range and Gravity:** The ranges listed assume Earth-like gravity conditions (1&nbsp;g). At different gravity conditions, divide the range rating for kinetic, seeker, spray, and thrown weapons by the gravity. For example, a weapon with range 100 at 1&nbsp;g would have a range of 200 meters in 0.5&nbsp;g and a range of 50 meters at 2&nbsp;g. In microgravity/zero g, the maximum range is effectively line of sight. Beam weapons are not affected by gravity.

**Beam Weapons and Vacuum:** Beam weapons fare much better in non-atmospheric conditions. Maximum beam weapon range in vacuum is effectively line of sight.

### Suppressive Fire

To provide cover for an ally, you can lay down suppressive fire over an area rather than targeting anyone specifically, with the intent of making everyone in the suppressed area keep their heads down. This takes a complex action, full-auto mode, and uses up 20 shots. The suppressed area extends out in a cone, with the widest diameter of the cone being up to 20 meters across. Any character who is not behind cover or who does not immediately move behind cover on their action is at risk of getting hit by the suppressive fire. Make one attack roll with no modifiers except for range and wounds. Apply it to anyone moving out of cover inside the suppressed area; they defend as normal. If struck, they resist damage as if from a single shot.

<!--sort-end-->

<blockquote class="table">

### Ranged Modifiers

These modifiers apply to ranged combat attacks.

<!--sort-->

| Situation                                                          |                                      Modifiers                                       |
| :----------------------------------------------------------------- | :----------------------------------------------------------------------------------: |
| Aim (Quick Action)                                                 |                                         +10                                          |
| <!--sort-union-->Aim (Complex Action)                              |                                         +30                                          |
| Attacker Behind/Coming Out of Cover                                |                                         −10                                          |
| Attacker Firing Multiple Weapons At Once                           |                             −20 cumulative (after first)                             |
| Attacker In Melee                                                  |                                −10 (−30 long weapons)                                |
| Attacker Not Using Smartlink or Laser Sight                        |                                         −10                                          |
| Defender Behind Minor Cover                                        |                                         −10                                          |
| <!--sort-union-->Defender Behind Moderate Cover                    |                                         −20                                          |
| <!--sort-union-->Defender Behind Major Cover                       |                                         −30                                          |
| Defender Hidden                                                    | −30 and/or 50% miss chance<br>([Blind Attacks](15-special-attacks.md#blind-attacks)) |
| Defender Prone and at Range (10+ m)                                |                                         −10                                          |
| Firing Mode                                                        |                                                                                      |
| <!--sort-union--><p class="indent">» Single-Shot/Semi-Auto</p>     |                                          +0                                          |
| <!--sort-union--><p class="indent">» Burst Fire (Concentrated)</p> |                                 +10 or +1d10&nbsp;DV                                 |
| <!--sort-union--><p class="indent">» Full Auto (Concentrated)</p>  |                                 +30 or +2d10&nbsp;DV                                 |
| Indirect Fire                                                      |                                         −20                                          |
| Range                                                              |                                                                                      |
| <!--sort-union--><p class="indent">» Point-Blank (2&nbsp;m)</p>    |                                         +10                                          |
| <!--sort-union--><p class="indent">» Close (10&nbsp;m)</p>         |                                          +0                                          |
| <!--sort-union--><p class="indent">» Range</p>                     |                                         −10                                          |
| <!--sort-union--><p class="indent">» Beyond Range</p>              |             −10 per Range increment<br>−1d10&nbsp;DV for kinetic weapons             |

</blockquote>
