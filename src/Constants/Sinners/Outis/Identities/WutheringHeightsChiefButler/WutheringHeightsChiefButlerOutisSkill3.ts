import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WutheringHeightsChiefButlerOutisSkill3 implements Skill {
    readonly Name: string = "As Mistress Commands";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] If target has 7+ [Sinking], Coin Power +1<br>"+
            "[Clash Win] Inflict +3 [Sinking] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Echoes of the Manor] next turn<br>"+
            "[On Hit] If the target has [Echoes of the Manor], inflict Gloom Affinity damage equal to [Sinking] Potency on target (Max 30)", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/WutheringHeightsChiefButler/AsMistressCommands.png";
}