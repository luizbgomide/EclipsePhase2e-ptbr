# Resolving Combat

Roleplaying games are about creating drama and adventure, and that often means adrenaline and conflict. Action scenes are the moments when the adrenaline really gets pumping and the characters’ lives and missions are on the line.

Combat and action scenarios can be confusing to run, especially if the GM also needs to keep track of the actions of numerous NPCs. For this reason, it’s important for the GM to detail the action in a way that everyone can visualize, whether that means using a map and miniatures, software, a dry-erase board, or quick sketches on paper. Though many of the rules for handling action and combat are abstract — allowing room for interpretation and fudging results to fit the story — many tactical factors are also incorporated, so small details can make a large difference. It also helps to have the capabilities of NPCs predetermined and to run them as a group when possible, to reduce the GM’s burden in the middle of a hectic situation.

Not every problem can be solved with words or wits. Whether you employ fists, knives, guns, or more creative options, all violence in Eclipse Phase is handled as an opposed test between the attacker and defender. Use the following steps to resolve combat situations, after determining initative: [Initiative & Order of Actions](../03/04-initiative-order-of-actions.md)

<blockquote>

## Combat Summary

Combat is an opposed test.

- Attacker rolls attack skill +/− modifiers.
- **Melee:** Defender rolls Fray or Melee skill +/− modifiers.
- **Ranged:** Defender rolls (Fray skill ÷ 2) +/− modifiers.
- If attacker succeeds and rolls higher than the defender, the attack hits. Roll damage.
- Superior hits inflict +1d6&nbsp;DV
- Critical hits double the DV.
- The weapon’s damage is reduced by the target’s energy or kinetic armor, as appropriate.
- If the damage equals or exceeds the target’s Wound Threshold, a wound is scored. If the damage equals or exceeds the target’s Wound Threshold by multiple factors, multiple wounds are inflicted.
- If total damage reaches Durability, the target is incapacitated. If it reaches Death Rating, they are killed/destroyed.

</blockquote>

## Step 1: Declare Attack

The attacker takes a complex action to attack on their turn in the Initiative order. The nature of the attack must be declared. The skill used depends on the method used to attack. Melee (close combat) and Guns (ranged weapons) are most common. Some attacks call for Athletics (thrown grenades), Hardware: Demolitions (placed charges), Interface (electronic weapon systems), or an Exotic skill.

## Step 2: Declare Defense

Defense is an automatic action. Unless they are [surprised](21-other-action-factors.md#surprise) or [incapacitated](21-other-action-factors.md#conditions), the defender always has the option to respond.

**Melee Defense:** Against a melee attack, the defender may choose to block and parry using their own Melee skill or dodge using Fray.

**Ranged Defense:** Ranged and area-effect attacks are much harder to dodge; defenders use their Fray skill ÷ 2.

**Psi Defense:** Psi sleights are resisted with WIL Check.

**Full Defense:** Characters that have declared they are engaging in [full defense](21-other-action-factors.md#full-defense) may defend as above, with a +30 modifier.

## Step 3: Apply Modifiers

Apply any appropriate situational, wound/trauma, or other modifiers to the attacker’s and defender’s skills, as appropriate.

<blockquote class="table">

### Combat Modifiers

Numerous factors can impact an attack’s outcome.<br>
These modifiers apply to all types of attacks.

| Situation                                                                            |       Modifiers        |
| :----------------------------------------------------------------------------------- | :--------------------: |
| Attacker takes a [full move](24-movement.md#full-move)                               |          −20           |
| Superior position                                                                    |          +20           |
| Wounded/traumatized                                                                  |  −10 per wound/trauma  |
| [Called shot](15-special-attacks.md#called-shots) (superior success needed)          |          −10           |
| Wielding [two-handed weapon](15-special-attacks.md#two-handed-weapons) with one hand |          −20           |
| Very small target (mouse or insect)                                                  |          −30           |
| Small target (child-sized)                                                           |          −10           |
| Large target (car sized)                                                             |          +10           |
| Very large target (side of a barn)                                                   |          +30           |
| Visibility impaired (minor: glare, light smoke, dim light)                           |          −10           |
| Visibility impaired (major: heavy smoke, dark)                                       |          −20           |
| [Blind Attacks](15-special-attacks.md#blind-attacks)                                 | −30 or 50% miss chance |

</blockquote>

## Step 4: Make Opposed Test

Both the attacker and defender roll d100 against their modified skill target numbers.

## Step 5: Determine Result

If the attacker fails, the attack misses completely. If the attacker succeeds and the defender fails, the attack hits.

If both attacker and defender succeed in their tests, compare their dice rolls. If the attacker’s dice roll is higher, the attack hits despite a spirited defense; otherwise, the attack fails to connect ([Opposed Tests](../03/02-types-of-tests.md#opposed-tests)). Remember that critical successes trump higher rolls.

**Attacker Superior Success:** For each superior success the attacker scores, increase the DV inflicted by +1d6.

**Attacker Critical Success:** If the attacker hits with a critical, the damage is doubled.

**Defender Superior/Critical Failure:** Ignored. Getting hit is bad enough!

## Step 6: Roll Damage

Every attack has a Damage Value (DV). If the attack hits, roll the dice and total the results. Superior/critical results may increase your damage dice.

Some attacks have additional effects, as noted in the description and weapon/ammo traits. These may call for the defender to make additional tests.

Some attacks inflict mental stress rather than physical damage ([Mental Health](18-mental-health.md)). In this case, the Stress Value (SV) is handled the same as DV.

## Step 7: Apply Armor

If the defender is wearing armor, it will protect them. Determine which part of the defender’s Armor Value (AV) applies — energy armor or kinetic armor ([Armor](11-armor.md)). Reduce the damage total by the appropriate value. If the damage is reduced to 0 or less, the armor is effective and the attack fails to injure the target.

Note that armor-piercing attacks reduce the AV by half.

## Step 8: Apply Damage

Inflicted damage that exceeds armor is applied to the defender.

Keep track of this total on the character sheet. If the accumulated damage equals or exceeds the defender’s Durability, they are incapacitated and may die ([Physical Health](16-physical-health.md)). If it equals or exceeds their Death Rating, they are killed/destroyed.

## Step 9: Determine Wounds

If the inflicted damage, less armor, from a single attack equals or exceeds the defender’s Wound Threshold, they suffer one or more [wounds](16-physical-health.md#wounds). A wound is scored for each multiple of the Wound Threshold that the damage exceeds. For example, against Wound Threshold 7, 1 wound is inflicted for every 7 points of damage inflicted at once (14 damage inflicts 2 wounds, 21 damage inflicts 3 wounds, etc.) Wounds represent more serious injuries and apply modifiers and other effects to the character.

<blockquote>

Jinx has found herself in a bad spot, in a tunnel with an exhuman closing in and planning on making a snack out of her. Jinx rolled higher on Initiative, so she goes first.

Jinx declares her intent to shoot the exhuman with a 3-round burst from her pistol. The GM declares that the exhuman will use Fray to dodge.

Jinx has Guns skill of 70. The exhuman is at Close range (10 meters away), so the range modifier is +0. With no other modifiers, her target is 70. She rolls a 96, a failure, but she spends a point of Flex to flip that to a 69 — which will count as two superior successes.

The exhuman has Fray of 60, but against a ranged attack this is halved.

The GM rolls against a target of 30. They get a 07, which would be a success, except that Jinx’s roll of 69 is higher. Jinx hits!

Jinx’s medium pistol inflicts DV 2d10. Jinx was using [burst-fire](04-ranged-combat.md#firing-modes) for extra damage (+d10), and her two superior successes gives her another 2d6, for a total DV of 3d10 + 2d6. She rolls a 7, 5, 5, 1, and 3, for a total damage of 21.

The exhuman has kinetic armor of 10, so only 11 of that damage gets through (21 − 10). They have a Wound Threshold of 8, so that inflicts a wound! Looking at the section on [wound effects](16-physical-health.md#wound-effects), the GM sees that the exhuman must make a SOM Check or get knocked down. They roll a 09 against a SOM check of 75, so the exhuman stays on their feet.

Jinx still has a base move, so they take to the air and move 8 meters up and away. They’re in a tunnel, though, so the exhuman can still reach them. On its turn, the GM declares they are making a [charging melee attack](02-melee-combat.md#charging) as they take a full move to cross the 18-meter distance. Jinx dodges with Fray.

The exhuman has Melee 80, −10 for the charge, and −10 more for the wound, for a target number of 60. They roll 07. Jinx has Fray 60, plus the GM gives them a superior position bonus for flying at the top of the ceiling, for target number 80. She rolls a 00. That’s lower than the exhuman’s result, but it’s a critical success, which trumps the exhuman’s roll! The GM rules that Jinx dodges in such a way that the exhuman over-extends and wipes out. Jinx has survived to the next action turn!

</blockquote>
