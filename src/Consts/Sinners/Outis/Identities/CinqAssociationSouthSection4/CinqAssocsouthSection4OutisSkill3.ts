import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocsouthSection4OutisSkill3 implements Skill {
    readonly Name: string = "Balestra Fente";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 8;
    readonly Coins: number = 1;
    readonly CoinValue: number = +14;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 7+ [Poise], Final Power +4<br>"+
            "[Clash Win] Gain [Poise] based on Clash count (Max 10)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Outis<br>"+
            "[On Hit] Apply 2 [Haste] next turn to 2 allies with the slowest Speed<br>"+
            "[On Crit] +70% Damage on Critical Hit", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Outis/CinqAssociationSouthSection4/BalestraFente.png";
}