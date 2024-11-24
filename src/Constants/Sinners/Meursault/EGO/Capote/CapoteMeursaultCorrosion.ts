import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CapoteMeursaultCorrosion implements Skill{
    readonly Name: string = "Capote";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 37;
    readonly Coins: number = 1;
    readonly CoinValue: number = -15;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Gain 2 [Haste], 1 [Wrath Power Up] and 1 [Blunt Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 12 [Burn]<br>"+
            "[On Hit] Inflict [Tremor] by [Burn] on target<br>"+
            "[On Hit] Inflict 3 [Burn] on 5 random enemies<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2; If the [Tremor Burst] Staggered the target, inflict +4 [Burn] Count on 5 random units", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/Capote/20504erosionprofile.png";
}