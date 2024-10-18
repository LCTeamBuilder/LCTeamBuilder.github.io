import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ScrewlooseWallopMeursaultAwakening implements Skill{
    readonly Name: string = "Screwloose Wallop";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 23;
    readonly Coins: number = 1;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[After Attack] Gain 3 [Protection]<br>"+
            "[After Attack] Gain 1 [Surgery] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502awakenprofile.png";
}