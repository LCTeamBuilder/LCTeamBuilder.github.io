import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class YaSunyataTadRupamHeathcliffCorrosion implements Skill{
    readonly Name: string = "Ya Śūnyatā Tad Rūpam";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 33;
    readonly Coins: number = 1;
    readonly CoinValue: number = -15;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly"),
        new SkillDescriptionPart("[Before Attack] At -15 or lower SP, +2 Atk Weight<br>"+
            "[On Hit] Inflict 3 [Defense Level Down] to 1 random other ally<br>"+
            "[On Hit] Gain 2 [Defense Power Up] next turn.<br>"+
            "[On Hit] Gain 1 [Damage Up] next turn.<br>"+
            "[Tails Hit] Heal 4 SP on self<br>"+
            "[Tails Hit] Inflict 1 [Fragile]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/YaSunyataTadRupam/20704erosionprofile.png";
}