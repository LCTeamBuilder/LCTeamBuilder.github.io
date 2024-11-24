import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class GardenOfThornsGregorCorrosion implements Skill{
    readonly Name: string = "Garden of Thorns";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 30;
    readonly Coins: number = 1;
    readonly CoinValue: number = -10;
    readonly AttackWeight: number = 4;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain (highest Count of Reson. - 2) +1 Atk Weight (Max. 3)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Damage Down]. Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 1 'Fragility' and 1 'Power Down' for the Sin Affinity with the highest Resonance count<br>"+
            "- At 4+ Corresponding Reson., inflict 1 additional '(Corresponding Sin Affinity) Fragility'<br>"+
            "- At 5+ Corresponding Reson., inflict 1 additional '(Corresponding Sin Affinity) Power Down'<br>"+
            "- At 6+ Corresponding A-Reson, apply the above effects next turn as well", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Gregor/EGO/GardenOfThorns/21205awakenprofile.png";
}