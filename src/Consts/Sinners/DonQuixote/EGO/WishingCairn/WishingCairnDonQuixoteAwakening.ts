import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class WishingCairnDonQuixoteAwakening implements Skill{
    readonly Name: string = "Wishing Cairn";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Sloth;
    readonly BaseValue: number = 18;
    readonly Coins: number = 1;
    readonly CoinValue: number = +9;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Inflict +4 [Bleed] Count<br>"+
            "[On Hit] Inflict 5 [Tremor]<br>"+
            "[Heads Hit] Inflict 2 [Paralyze]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305awakenprofile.png";
}