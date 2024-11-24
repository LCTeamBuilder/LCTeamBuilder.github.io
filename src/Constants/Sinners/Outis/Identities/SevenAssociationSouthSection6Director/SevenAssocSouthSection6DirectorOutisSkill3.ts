import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class SevenAssocSouthSection6DirectorOutisSkill3 implements Skill {
    readonly Name: string = "Exploit the Gap";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 3;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("In a clash, opponent has -2 Clash Power<br>"+
            "If target has 7+ [Rupture], Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Deal bonus Slash damage by 15% of damage dealt<br>"+
            "[On Hit] Inflict [Weakness Analyzed] next turn", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/SevenAssociationSouthSection6Director/ExploitTheGap.png";
}