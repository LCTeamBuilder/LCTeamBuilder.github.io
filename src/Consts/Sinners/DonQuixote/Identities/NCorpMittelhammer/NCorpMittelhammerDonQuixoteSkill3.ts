import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class NCorpMittelhammerDonQuixoteSkill3 implements Skill {
    readonly Name: string = "Fanatical Judgement";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 5;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Inflict 2 [Nails]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Nails]<br>"+
        "[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[Heads Hit] If target has 5+ [Nails], inflict 1 [Attack Power Down] next turn<br>"+
        "[Heads Hit] If target has 5+ [Nails], inflict 2 [Paralyze] next turn<br>"+
        "[On Hit] Inflict +1 [Tremor] Count", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/NCorpMittelhammer/FanaticalJudgement.png";
}