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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const ZweiAssocWestSection3SinclairDefense: Skill = {
    Name: "Zwei Knight's Greatsword Form - Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 2,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Guard]<br>"+
            "[Combat Start] Gain +5 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain +3 [Tremor] Count (once per turn)<br>"+
            "[Clash Win] Trigger [Tremor Burst]"),
        new SkillDescriptionPart("[Unbreakable Coin]", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/ZweiKnightsGreatswordFormGuardUT4.png'
}

const ZweiAssocWestSection3SinclairSkill1: Skill = {
    Name: "Suppressing.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 2 [Defense Level Up]<br>"+
            "[On Use] If the target has 4+ [Tremor] Count, Clash Power +2<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[Hit after Clash Win] Inflict +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Defense Level Up] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/Suppressing.png'
}

const ZweiAssocWestSection3SinclairSkill2: Skill = {
    Name: "Combat Preparation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 3)<br>"+
            "[On Use] At 4+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[Hit after Clash Win] On 2 other allies with the lowest HP percentage, apply 2 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] On 2 other allies with [Defense Level Up], apply (([Defense Level Up] on the ally)/2) [Offense Level Up] next turn (once per turn, max 3)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/CombatPreparation.png'
}

const ZweiAssocWestSection3SinclairSkill3: Skill = {
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
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/Fence.png'
}

export const ZweiAssocWestSection3Sinclair: Identity = {
    Id: 11010,
    Name: "Zwei Assoc. West Section 3",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 86,
    HealthPerLevel: 2.96,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [60],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [ZweiAssocWestSection3SinclairSkill1, 
            ZweiAssocWestSection3SinclairSkill2, 
            ZweiAssocWestSection3SinclairSkill3, 
            ZweiAssocWestSection3SinclairDefense],
    Passives: [
        new Passive("Begin Protection Mission",
            PassiveTypeEnum.Combat,
            "At Combat Start, gain [Defense Level Up] equal to [Tremor] Count on self (max 5)",
            [{ sin: SinEnum.Sloth, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Contract Target Protection",
            PassiveTypeEnum.Support,
            "Turn End: apply 1 [Haste] and 3 [Defense Level Up] to 1 ally with the lowest HP percentage next turn",
            [{ sin: SinEnum.Sloth, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/ZweiAssocWestSection3/11010gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/ZweiAssocWestSection3/11010gacksunginfo.png'
}