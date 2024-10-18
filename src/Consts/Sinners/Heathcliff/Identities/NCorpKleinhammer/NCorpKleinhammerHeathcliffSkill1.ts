import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class NCorpKleinhammerHeathcliffSkill1 implements Skill {
    readonly Name: string = "Gawky Nailing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Heads Hit] Inflict 1 [Nails] next turn<br>"+
            "[Tails Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Nails]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/NCorpKleinhammer/GawkyNailing.png";
}