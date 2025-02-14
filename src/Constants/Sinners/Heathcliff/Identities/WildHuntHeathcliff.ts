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

const WildHuntHeathcliffDefense: Skill = {
    Name: "O Dullahan...!",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>"+
            "[Before Use] If this unit has [Dullahan] and has 15+ SP, use 'Lament, Mourn, and Despair' as Counter (once per turn)<br>"+
            "[Combat Start] If this unit does not have [Dullahan], gain 1 [Dullahan] next turn (once per turn)<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] on the target (max 2)<br>"+
            "[Clash Win] Gain [Offense Level Up] next turn equal to (# of Clashes/3) (max 3, once per turn)<br>"+
            "[Turn End] If this unit has [Dullahan], lose [Dullahan]"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] and +1 [Sinking] Count", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/WildHunt/ODullahan.png'
}

const WildHuntHeathcliffSkill1: Skill = {
    Name: "Beheading",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 6+ [Sinking], Clash Power +1<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] Count on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/WildHunt/Beheading.png'
}

const WildHuntHeathcliffSkill2: Skill = {
    Name: "Memorial Procession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 5 [Sinking] on the target (max 2)<br>"+
            "[On Use] Atk Weight +1 for every 4 [Coffin] on self (max 2)<br>"+
            "[On Use] If this unit has [Dullahan], Atk Weight +1<br>"+
            "[After Attack] If this unit has [Dullahan], lose 10 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Hit] Inflict 2 [Impending Ruin] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/WildHunt/MemorialProcession.png'
}

const WildHuntHeathcliffSkill3: Skill = {
    Name: "Requiem",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Win] Heal 10 SP<br>"+
            "[Before Use] If this unit has [Dullahan], activate 'Lament, Mourn, and Despair' instead<br>"+
            "[On Use] Coin Power +1 for every 3 [Sinking] on the target (max 4)<br>"+
            "[On Use] Deal +12% more damage for every [Coffin] on self (max 120%)<br>"+
            "[On Use] Gain 1 [Coffin]<br>"+
            "[After Attack] If this Skill attack kills the target, gain 2 [Coffin]"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count<br>"+
            "[On Hit] If the target has [Impending Ruin], inflict +2 [Sinking] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Sinking]<br>"+
            "[On Kill] Inflict ([Sinking] on killed target/2) [Sinking] on 2 random enemies (max 5)", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/WildHunt/Requiem.png'
}

const WildHuntHeathcliffSkill4: Skill = {
    Name: "Lament, Mourn, and Despair",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 31,
    Coins: 2,
    CoinValue: -13,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 15 SP<br>"+
            "[On Use] Base Power +1 for every 5 [Sinking] on the target (max 4)<br>"+
            "[On Use] Deal more damage the further this unit's SP value is from 45 (+0.3% more damage for every missing SP, max 21%)<br>"+
            "[On Use] Deal +10% more damage for every [Coffin] on self (max 100%)<br>"+
            "[On Use] Deal +20% more damage for every [Dullahan] on self (max 60%)<br>"+
            "[On Use] Gain 2 [Coffin]<br>"+
            "[After Attack] If this Skill attack kills the target, gain 3 [Coffin]<br>"+
            "[After Attack] At less than 0 SP, heal 10 SP. When at less than 0 SP, heal more SP the further this unit's SP value is from 0 (heal 2 additional SP for every missing SP, max 50)<br>"+
            "[Turn End] Lose [Dullahan]"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Sinking] and +2 [Sinking] Count<br>"+
            "[On Hit] Raise the target's Stagger Threshold by 30% of damage dealt", 1),
        new SkillDescriptionPart("[On Hit] Inflict Gloom Affinity damage equal to [Sinking] on target (max 30)<br>"+
            "[On Kill] Inflict ([Sinking] on killed target/2) [Sinking] on 2 random enemies (max 8)<br>"+
            "[On Kill] Heal 15 SP", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Heathcliff/WildHunt/LamentMournAndDespair.png'
}

export const WildHuntHeathcliff: Identity = {
    Id: 10710,
    Name: "Wild Hunt",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [65, 35, 20],
    DefenseLevel: -2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WildHuntHeathcliffSkill1,
            WildHuntHeathcliffSkill2,
            WildHuntHeathcliffSkill3,
            WildHuntHeathcliffSkill4,  
            WildHuntHeathcliffDefense],
    Passives: [
        new Passive("Dullahan",
            PassiveTypeEnum.Combat,
            "- Turn Start: if this unit has [Dullahan], mount [Dullahan]<br>"+
            "- Lose 5 SP every time this unit mounts [Dullahan]<br>"+
            "- If 3+ allies have been defeated in this Encounter, gain [Dullahan] next turn. (once per Encounter)<br>"+
            "- If this unit gets Staggered due to damage or raised Stagger Threshold when mounting [Dullahan], recover from Stagger. If the Stagger is something that cannot be naturally recovered from, this unit does not mount [Dullahan].<br><br>"+

            "- Gain 1 [Coffin] when killing the target."),

        new Passive("Call of the Erlking",
            PassiveTypeEnum.Combat,
            "- Deal +1% more damage for every 1 [Sinking] on target (max 15%)<br><br>"+
            
            "- When, during combat, 1 ally takes damage that would kill them, consume 2 [Coffin] to apply [Wild Hunt] to them (2 times per turn)<br><br>"+

            "- Apply 2 [Damage Up] next turn to the ally with [Wild Hunt]<br>"+
            "- If the said ally is from Wuthering Heights or Edgar Family, apply 1 [Attack Power Up] next turn as well",
            [{ sin: SinEnum.Envy, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Endless Lamentation",
            PassiveTypeEnum.Support,
            "1 ally with the highest SP deals +5% more damage to targets with less than 0 SP<br>"+
            "If the target has less than 0 SP: deal even more damage the further the target's SP is from 0 (+0.5% more damage per SP, max 20%)<br>"+
            "If the target does not have SP, the said ally inflicts +1 more [Sinking] Potency and Count with their Skill and Coin Effects of their Attack Skills (2 times per turn)",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Heathcliff/Identities/WildHunt/10710gacksung.png',
    PortraitImageDir: './assets/Sinners/Heathcliff/Identities/WildHunt/10710gacksunginfo.png'
}