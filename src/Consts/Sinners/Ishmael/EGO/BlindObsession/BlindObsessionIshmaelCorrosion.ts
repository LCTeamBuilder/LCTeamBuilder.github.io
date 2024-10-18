import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class BlindObsessionIshmaelCorrosion implements Skill{
    readonly Name: string = "Blind Obsession";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 35;
    readonly Coins: number = 1;
    readonly CoinValue: number = -10;
    readonly AttackWeight: number = 7;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly"),
        new SkillDescriptionPart("[On Hit] Heal 3% of Max HP on self<br>"+
            "[On Hit] Gain 1 [Poise] and +1 [Poise] Count<br>"+
            "[On Hit] Inflict 3 [Pride Fragility] this turn and next turn<br>"+
            "[After Attack] Apply 2 [Damage Up] this turn and next turn to 4 allies with the least SP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/BlindObsession/20805erosionprofile.png";
}