import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TelepoleHeathcliffCorrosion implements Skill{
    readonly Name: string = "Telepole";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 39;
    readonly Coins: number = 1;
    readonly CoinValue: number = -21;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate] Targets randomly<br>"+
            "[On Use] Gain [Charge] Count by Envy Reson.<br>"+
            "Spend all [Charge] Count to gain +15 Base Power"),
        new SkillDescriptionPart("[Heads Hit] Gain 3 [Fragile] next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/Telepole/20702erosionprofile.png";
}