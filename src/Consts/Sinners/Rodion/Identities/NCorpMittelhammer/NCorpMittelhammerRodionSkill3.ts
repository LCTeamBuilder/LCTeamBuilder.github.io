import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class NCorpMittelhammerRodionSkill3 implements Skill {
    readonly Name: string = "Ironclad Retribution";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If this unit is [Fanatic], deal +15% damage<br>"+
            "Deal +5% damage for each 'N Corp. Fanatic' present in the party"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/IroncladRetribution.png";
}