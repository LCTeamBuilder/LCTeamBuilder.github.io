import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheBarberOfLaManchalandOutisSkill3: Skill = {
    Name: "I'll Make You a New Dress!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 30% of the HP damage dealt (max 20)<br>"+
"[Before Attack] At 10+ [Blood-tinged Scissorblades], Atk Weight +1<br>"+
"- At 20+ [Blood-tinged Scissorblades], replace the above effect with Atk Weight +2 instead<br>"+
"[On Use] If the target has 5+ [Bleed], Coin Power +1<br>"+
"[On Use] Clash Power +1 for every 6 [Bleed] on the target (max 2)<br>"+
"[After Attack] Consume 10 [Blood-tinged Scissorblades] for every Atk Weight gained<br>"+
"[After Attack] If the target is killed, increase [Bloodfeast] by 20. Regain half of [Blood-tinged Scissorblades] consumed by this Skill (once per turn)<br>"+
"- If the target is [Sewing Target], additionally increase [Bloodfeast] by 20 and gain 5 [Blood-tinged Scissorblades] (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] At 10+ [Blood-tinged Scissorblades], deal +([Blood-tinged Scissorblades] x 3)% more damage (max 57%)<br>"+
"- At 20+ [Blood-tinged Scissorblades], deal +([Blood-tinged Scissorblades] x 4)% more damage instead (max 120%)", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/IllMakeYouANewDress.png"
}