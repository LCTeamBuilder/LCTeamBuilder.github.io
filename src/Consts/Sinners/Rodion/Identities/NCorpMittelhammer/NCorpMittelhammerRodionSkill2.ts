import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class NCorpMittelhammerRodionSkill2 implements Skill {
    readonly Name: string = "Zealous Purge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Clash Win] Gain 1 [Fanatic] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Nails] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Paralyze] next turn", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/NCorpMittelhammer/ZealousPurge.png";
}