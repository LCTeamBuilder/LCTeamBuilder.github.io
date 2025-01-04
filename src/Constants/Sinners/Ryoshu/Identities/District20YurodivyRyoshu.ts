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

const District20YurodivyRyoshuDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 7,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 x ([Tremor] Count on self) as Shield HP (max 10)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/GuardUT4.png"
}

const District20YurodivyRyoshuSkill1: Skill = {
    Name: "Got a Screw Loose?",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] At 4+ [Tremor] Count, Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Gain [Tremor] Count on self equal to ([Tremor] Count on target) (max 4)", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/GotAScrewLoose.png"
}

const District20YurodivyRyoshuSkill2: Skill = {
    Name: "Compression Wind-up Spanner",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] At 4+ [Tremor] Count, Clash Power +1<br>"+
            "At 4+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 2),
        new SkillDescriptionPart("[On Hit] Consume [Tremor] Count on self, and inflict the same amount of [Tremor] Count on target (max 5)", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/CompressionWindupSpanner.png"
}

const District20YurodivyRyoshuSkill3: Skill = {
    Name: "Percussive Maintenance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "Consume 8 [Tremor] Count on self to gain Coin Power +1<br>"+
            "If the target has 6+ [Tremor], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/District20Yurodivy/PercussiveMaintenance.png"
}

export const District20YurodivyRyoshu: Identity = {
    Id: 10409,
    Name: "District 20 Yurodivy",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 71,
    HealthPerLevel: 2.4,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [District20YurodivyRyoshuSkill1, 
            District20YurodivyRyoshuSkill2, 
            District20YurodivyRyoshuSkill3, 
            District20YurodivyRyoshuDefense],
    Passives: [
        new Passive("N.O.",
            PassiveTypeEnum.Combat,
            "- When an other ally Staggers an enemy with an attack: follow up with a Skill 1 against the Staggered enemy. (once per Turn)<br>"+
            "- If multiple enemies are Staggered at once, target the enemy with the least HP (for Abnormalities, target the Abnormality with the least HP, then, target the Part with the least HP).<br>"+
            "- When using Skill 1 with this effect, this unit gains +1 more [Tremor] Count from its Coin effects, and triggers a [Tremor Burst] with the last Coin On Hit",
            [{ sin: SinEnum.Sloth, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("The A.I.",
            PassiveTypeEnum.Support,
            "#1 Deployed ally gains +1 more [Tremor] Count from their Skill or Coin effects (2 times per turn)",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/District20Yurodivy/10409gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/District20Yurodivy/10409gacksunginfo.png"
}