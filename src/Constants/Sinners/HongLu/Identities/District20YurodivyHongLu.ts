import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const District20YurodivyHongLuDefense: Skill = {
    Name: "Wait?!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 x ([Tremor] Count on target) as Shield HP (max 13)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/Wait.png"
}

const District20YurodivyHongLuSkill1: Skill = {
    Name: "Deduction Start",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "At 6+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/DeductionStart.png"
}

const District20YurodivyHongLuSkill2: Skill = {
    Name: "Morph Cane Technique",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 6+ [Tremor], Clash Power +1<br>"+
            "[On Use] Gain +3 [Tremor] Count<br>"+
            "At 5+ [Tremor] Count, +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If the target has 6+ [Tremor], trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/MorphCaneTechnique.png"
}

const District20YurodivyHongLuSkill3: Skill = {
    Name: "You're the Culprit!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] At less than 15 [Tremor] Count on self, consume 10 [Tremor] Count to gain Coin Power +2<br>"+
            "[On Use] Consume 15 [Tremor] Count on self to gain Coin Power +3"),
        new SkillDescriptionPart("[On Hit] If this Skill consumed [Tremor] Count on Use, trigger [Amplitude Entanglement] into [Tremor - Reverb]", 1),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 10+ [Tremor] Count on Skill Use, trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 10+ [Tremor] Count on Skill Use, trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1)<br>"+
            "- If this unit consumed less than 15 [Tremor] Count, trigger [Tremor Burst] on self after activating the above effect", 4)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/District20Yurodivy/YoureTheCulprit.png"
}

export const District20YurodivyHongLu: Identity = {
    Id: 10609,
    Name: "District 20 Yurodivy",
    Sinner: SinnerEnum.HongLu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.4,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [District20YurodivyHongLuSkill1, 
            District20YurodivyHongLuSkill2, 
            District20YurodivyHongLuSkill3, 
            District20YurodivyHongLuDefense],
    Passives: [
        new Passive("Vibroweld Morph-combat Cane (Unauthorized Invention)",
            PassiveTypeEnum.Combat,
            "Turn End: gain [Damage Up] next turn equal to the number of times this unit triggered [Tremor Burst] this turn (max 3)",
            [{ sin: SinEnum.Sloth, amount: 6 }],
            PassiveCostTypeEnum.Owned),

        new Passive("In the Culprit's Shoes",
            PassiveTypeEnum.Support,
            "When #1 Deployed Identity triggers [Tremor Burst] with Skill or Coin effects, 25% chance to trigger an additional [Tremor Burst] (once per turn)",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/HongLu/Identities/District20Yurodivy/10609gacksung.png",
    PortraitImageDir: "./assets/Sinners/HongLu/Identities/District20Yurodivy/10609gacksunginfo.png"
}