# Flexbot Combat

Flexbots are not meant to be combat machines, but they can be dangerous adversaries, especially if given time to shapeshift the gear they need beforehand.

## Damage And Wounds

When a flexbot takes damage, it is applied to the morph as a whole and measured against its combined Durability score (and derived Wound Threshold and Death Rating). Wounds are applied to the morph as a whole. If damage exceeds Durability, the flexbot is disabled; if it exceeds Death Rating, it is destroyed. Infomorphs carried within modules are subject to the usual rules for [Damage and Infomorph Riders](../../13/15-hardware-damage.md#damage-and-infomorph-riders) (_EP2_).

### Distributed Damage

If a module separates from a damaged flexbot, it becomes important to know how much damage that specific module has taken. In this case, divide the damage taken by the flexbot evenly between modules. If a detached module has damage exceeding its Wound Threshold, one of the wounds (if any) taken by the flexbot can be assigned to that module. If the damage exceeds the module’s Wound Threshold x 2, it can take 2 of the wounds, and so on.

<blockquote>

A flexbot with 5 modules takes 40 points of damage. Each individual module carries 8 damage (40 ÷ 5 = 8). If any modules have a Wound Threshold of 8 or less, they can be assigned one of the flexbot’s wounds.

</blockquote>

If the share of damage taken by a module exceeds its Durability, it is instantly disabled when separated. If the damage exceeds its Death Rating, that module is destroyed.

### Optional Rule: Surviving Modules

When a flexbot is disabled by damage reaching or exceeding its Durability, it can no longer function as an aggregate unit. However, individual modules may still remain functional. Divide the damage taken by the flexbot among each of its modules, as described under [Distributed Damage](#distributed-damage). If any modules have individually taken damage that hasn’t reached their Durability, they are still functional. If the controlling ego resides in a module that is disabled, they are considered incapacitated.

If a surviving module holds an ego within its cyberbrain that has control privileges, it can detach from the disabled flexbot and act independently (making an Integration Test as normal). Any surviving modules must distribute the flexbot’s wounds between them, up to a maximum of damage ÷ Wound Threshold for each.

<blockquote>

A fighter module (Wound Threshold 6) emerges from a disabled flexbot (5 wounds) as the sole surviving module with 25 damage. However, it only takes 4 of those wounds (25 ÷ 6 = 4.2, rounded to 4).

</blockquote>

Surviving modules that do not have a (new) controlling ego may be picked up and absorbed by other survivor modules (assuming they have control privileges). They may also be remotely operated by anyone with control access.

### Targeting Modules

You may make [called shots](../../12/15-special-attacks.md#called-shots) (_EP2_) to target individual modules in a flexbot. When targeting individual modules, use only that module’s Armor Value, Wound Threshold, Durability, and Death Rating. The damage/wounds taken by that module is counted towards the flexbot’s damage/wounds as a whole, but in this case it also becomes necessary to track each module’s damage as described under [Distributed Damage](#distributed-damage). If a targeted module is disabled or destroyed, the flexbot cannot use any of its functions until repaired. If a disabled/destroyed module carries the controlling ego, the flexbot is incapacitated until repaired; other modules with egos capable of taking control may assume control of the morph or separate per normal rules. Damaged/disabled modules can also be removed from a morph as normal (requiring an Integration Test).

<blockquote>

## Optional Rule: Flexbots and EMP

Given that smart matter is made of nanoscale robotics and relies on electromagnets to keep its shape, it is highly vulnerable to EMP, similar to swarms. EMP attacks inflict DV 3d10 to each flexbot module.

</blockquote>
