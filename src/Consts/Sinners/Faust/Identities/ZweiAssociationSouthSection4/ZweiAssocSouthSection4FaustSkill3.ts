import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ZweiAssocSouthSection4FaustSkill3 implements Skill {
    readonly Name: string = "Law and Order";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 5+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Heal 4 HP"),
        new SkillDescriptionPart("Apply 1 [Haste] and 2 [Defense Level Up] to the ally with the lowest HP percentage next turn<br>"+
            "If the ally is a Zwei Association Fixer, apply an additional 1 [Haste], 1 [Defense Level Up]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/ZweiAssociationSouthSection4/LawAndOrder.png";
}