import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3SinclairSkill3: Skill = {
    Name: "Fence",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self<br>"+
            "[On Use] Coin Power +1 for every 3 [Defense Level Up] on self (max 3)"),
        new SkillDescriptionPart("[On Hit] On 1 other ally with the lowest HP percentage, apply 4 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] Consume up to 8 [Tremor] Count on self, and inflict the same amount as [Tremor] Count on target<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/Fence.png"
}