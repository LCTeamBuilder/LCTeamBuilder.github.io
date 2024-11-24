import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CinqAssocSouthSection5DirectorDonQuixoteSkill3 implements Skill {
    readonly Name: string = "Salut!";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 6;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +4;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ Speed, Coin Power +3<br>"+
            "[Clash Win] Deal more damage based on Clash count (+10% per Clash count, Max 100%)"),
        new SkillDescriptionPart("[On Hit] Inflict [Declared Duel] - Don Quixote", 1),
        new SkillDescriptionPart("[On Kill] Heal 15 SP", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/CinqAssociationSouthSection5Director/Salut.png";
}