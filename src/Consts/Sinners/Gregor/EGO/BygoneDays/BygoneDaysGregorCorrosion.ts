import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BygoneDaysGregorCorrosion implements Skill{
    readonly Name: string = "Bygone Days";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 27;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "If the target has [Curse], deal +50% more damage"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Gloom Fragility]. Inflict 1 additional [Gloom Fragility] for every 2 Gloom Reson. (max 2)<br>"+
            "[On Hit] Inflict +3 [Sinking] Count<br>"+
            "[On Hit] Inflict 3 [Curse]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/BygoneDays/21206erosionprofile.png";
}