import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EdgarFamilyHeirGregorSkill3 implements Skill {
    readonly Name: string = "Nightmare Hunt";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Clash Power +1 for every 3 [Sinking] Count on target (max 3)<br>"+
            "[After Attack] If the target is Staggered, inflict +3 [Sinking] Count<br>"+
            "[After Attack] If the target is defeated, inflict +3 [Sinking] Count on 2 random enemies"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]", 3),
        new SkillDescriptionPart("[On Hit] Absorb 10 [Sinking] from the target and gain 1 [Plus Coin Boost] and 3 [Damage Up] next turn. 50% chance to gain the above effects without absorbing [Sinking].", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/EdgarFamilyHeir/NightmareHunt.png";
}