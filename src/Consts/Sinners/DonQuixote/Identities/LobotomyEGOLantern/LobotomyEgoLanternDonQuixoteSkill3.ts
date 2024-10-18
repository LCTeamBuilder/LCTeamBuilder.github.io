import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoLanternDonQuixoteSkill3 implements Skill {
    readonly Name: string = "Whirlwind Om-Nom-Nom!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] If target has 6+ [Rupture], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Rupture] Count", 1),
        new SkillDescriptionPart("[On Hit] Heal 15 HP. Heal by +50% more HP when reusing Coin.<br>"+
            "[On Hit] Heal additional HP based on [Rupture] on target (2 HP healed per 1 [Rupture]. Max 40)<br>"+
            "At 50%- HP, reuse Coin once", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/LobotomyEGOLantern/WhirldwindOmNomNom.png";
}