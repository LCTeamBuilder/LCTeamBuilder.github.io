import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LobotomyEgoSloshingIshmaelSkill3 implements Skill {
    readonly Name: string = "Corrosive Splash";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 6;
    readonly Coins: number = 1;
    readonly CoinValue: number = +16;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +4 [Aggro] to this Skill Slot next turn<br>"+
            "[Clash Lose] Inflict 5 [Tremor] and 5 [Rupture]"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 4. Inflict 5 [Rupture]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ishmael/LobotomyEGOSloshing/CorrosiveSplash.png";
}