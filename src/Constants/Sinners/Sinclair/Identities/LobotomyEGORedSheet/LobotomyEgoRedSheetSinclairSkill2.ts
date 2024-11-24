import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoRedSheetSinclairSkill2 implements Skill {
    readonly Name: string = "Proliferating Talismans";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 1),
        new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 2),
        new SkillDescriptionPart("[On Hit] Gain 1 [Talisman]<br>"+
        "[On Hit] If target has [Rupture], gain 1 [Talisman]", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Sinclair/LobotomyEGORedSheet/ProliferatingTalismans.png";
}