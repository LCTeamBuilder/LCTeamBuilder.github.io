import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LccbAssistantManagerRodionSkill3 implements Skill {
    readonly Name: string = "Suppress";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 7;
    readonly Coins: number = 2;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target took no damage from attacks this turn, Coin Power +3"),
        new SkillDescriptionPart("[Heads Hit] Inflict 4 [Defense Power Down]<br>"+
            "[On Hit] Inflict 4 [Defense Level Down]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/LCCBAssistantManager/Suppress.png";
}