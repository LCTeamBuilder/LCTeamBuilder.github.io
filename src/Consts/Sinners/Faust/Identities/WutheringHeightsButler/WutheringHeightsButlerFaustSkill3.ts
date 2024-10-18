import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WutheringHeightsButlerFaustSkill3 implements Skill {
    readonly Name: string = "Reception Arts 4: Heartseal";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] If the target has 5+ [Sinking] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Echoes of the Manor] next turn<br>"+
            "[On Hit] If the target has [Echoes of the Manor], inflict +3 [Sinking] Count", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/WutheringHeightsButler/ReceptionArts4Heartseal.png";
}