import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TCorpClass2CollectionStaffRodionSkill3: Skill = {
    Name: "Execute Collections",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Bind] on target (max 20%)<br>"+
            "[On Use] If the target has 8+ [Tremor], Clash Power +2<br>"+
            "[On Use] Consume 8 [Tremor] Count on self to gain Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If this unit consumed [Tremor] Count with Skill use, inflict 2 [Bind] next turn<br>"+
            "[On Hit] If this unit is in a [Borrowed Time] state, inflict 2 [Time Moratorium]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/ExecuteCollections.png"
}