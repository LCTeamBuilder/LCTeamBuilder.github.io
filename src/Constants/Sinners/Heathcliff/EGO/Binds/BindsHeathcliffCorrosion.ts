import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BindsHeathcliffCorrosion implements Skill{
    readonly Name: string = "Binds";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 35;
    readonly Coins: number = 1;
    readonly CoinValue: number = -15;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[After Attack] Next turn, gain 20 [Bind], 1 [Before the King], and 3 [Attack Power Up]<br>"+
            "[After Attack] Next turn, apply 20 [Bind], 3 [Attack Power Up] , and 2 [Gloom DMG Up] to 2 other allies in the order of Deployment<br>"+
            "- The number of affected allies grows by (highest Gloom or Pride Reson. - 2) (max 4)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bind] next turn<br>"+
            "[On Hit] Inflict 4 [Sinking]<br>"+
            "[On Hit] Inflict 4 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/Binds/20706erosionprofile.png";
}