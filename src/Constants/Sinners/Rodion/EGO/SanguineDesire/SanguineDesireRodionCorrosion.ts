import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SanguineDesireRodionCorrosion implements Skill{
    readonly Name: string = "Sanguine Desire";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 30;
    readonly Coins: number = 1;
    readonly CoinValue: number = -11;
    readonly AttackWeight: number = 5;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every (highest Reson.) above 2"),
        new SkillDescriptionPart("[On Hit] Inflict (4 + (Lust Reson.)) [Bleed] (Maximum Lust Reson. taken into account: 6)<br>"+
            "[On Hit] Inflict +3 [Bleed] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/SanguineDesire/20906erosionprofile.png";
}