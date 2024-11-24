import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RCorp4thPackRhinoMeursaultSkill3 implements Skill {
    readonly Name: string = "Rhino Ram";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] At 10+ [Charge] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 2 [Charge] Count; Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 3 [Charge] Count; Inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 2 [Charge] Count; Inflict +1 [Bleed] Count<br>"+
            "[On Hit] Spend 3 [Charge] Count; Inflict +1 [Bleed] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Meursault/RCorp4thPackRhino/RhinoRam.png";
}