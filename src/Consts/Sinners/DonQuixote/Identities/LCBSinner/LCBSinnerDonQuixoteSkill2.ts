import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LCBSinnerDonQuixoteSkill2 implements Skill {
    readonly Name: string = "Galloping Tilt";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 4;
    readonly Coins: number = 1;
    readonly CoinValue: number = +12;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = [new SkillDescriptionPart("[Clash Win] Gain 2 [Attack Power Up] next turn"),
                                                        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/LCBSinner/GallopingTilt.png"; 
}