import "../../../SBURBSim.dart";
import "Interest.dart";
import "../../../Lands/FeatureTypes/QuestChainFeature.dart";
import "../../../Lands/Reward.dart";
import "../../../Lands/Quest.dart";

class Fantasy extends InterestCategory {


    @override
    List<AssociatedStat> stats = new List<AssociatedStat>.unmodifiable(<AssociatedStat>[new AssociatedStat(Stats.MAX_LUCK, 1.0, true), new AssociatedStat(Stats.ALCHEMY, 1.0, true)]);
    @override
    List<String> handles1 = <String>["musing", "pacific", "minotaurs", "kappas", "restful", "serene", "titans", "hazy", "best", "peaceful", "witchs", "sylphic", "sylvan", "shivan", "hellkite", "malachite"];

    @override
    List<String> handles2 =<String>["Lich","Believer", "Dragon", "Magician", "Sandman", "Shinigami", "Tengu", "Harpy", "Dwarf", "Vampire", "Lamia", "Roc", "Mermaid", "Siren", "Manticore", "Banshee", "Basilisk", "Boggart"];

    @override
    List<String> levels = <String>["FAKEY FAKE LOVER", "FANTASTIC DREAMER"];

    @override
    List<String> interestStrings = <String>["Wizards", "Horrorterrors", "Mermaids", "Unicorns", "Science Fiction", "Fantasy", "Ninjas", "Aliens", "Conspiracies", "Faeries", "Elves", "Vampires", "Undead"];


    Fantasy() :super(7, "Fantasy", "imaginative", "whimpy");

    @override
    void initializeItems() {
        items = new WeightedList<Item>()
            ..add(new Item("Fluthulu Poster",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.COMFORTABLE, ItemTraitFactory.SCARY, ItemTraitFactory.CORRUPT],shogunDesc: "The Next Target Poster",abDesc:"No. Fuck you. Don't alchemize this."))
            ..add(new Item("Scalemate",<ItemTrait>[ItemTraitFactory.CLOTH, ItemTraitFactory.COMFORTABLE, ItemTraitFactory.SCARY],shogunDesc: "Target Practice Plush",abDesc:"Senator Lemonsnout's treachery knows no bounds."))
            ..add(new Item("Replica Bone Shield",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.PLASTIC,ItemTraitFactory.BONE, ItemTraitFactory.SHIELD, ItemTraitFactory.FAKE],shogunDesc: "Weaklings Fake Gear made of Dynamo Flesh",abDesc:"Something, something, Bonezerker."))
            ..add(new Item("Replica Ice Sword",<ItemTrait>[ItemTraitFactory.PLASTIC,ItemTraitFactory.ICE, ItemTraitFactory.SWORD, ItemTraitFactory.FAKE],shogunDesc: "Fake Hard Water Long Stabber"))
            ..add(new Item("Zombie Mask",<ItemTrait>[ItemTraitFactory.PLASTIC,ItemTraitFactory.UGLY, ItemTraitFactory.FLESH, ItemTraitFactory.SCARY],shogunDesc: "Dead Face"))
            ..add(new Item("Vampire Romance Novel",<ItemTrait>[ItemTraitFactory.BOOK,ItemTraitFactory.PAPER, ItemTraitFactory.ROMANTIC, ItemTraitFactory.SCARY],shogunDesc: "Fireplace Fodder Literature",abDesc:"Or, you know, Rainbow Drinkers, if you're fucking civilized."))
            ..add(new Item("Wizardy Herbert",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.MAGICAL, ItemTraitFactory.BLUNT],shogunDesc: "Shitty Wizard Object"))
            ..add(new Item("Complacency of the Learned",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.MAGICAL, ItemTraitFactory.BLUNT],shogunDesc: "Tome of Shitty Wizards",abDesc:"I hear it's an elaborate metaphor for something."))
            ..add(new Item("Grimoire for Summoning the Zoologically Dubious ",<ItemTrait>[ItemTraitFactory.PAPER, ItemTraitFactory.MAGICAL,ItemTraitFactory.UGLY,ItemTraitFactory.SCARY,ItemTraitFactory.CORRUPT],shogunDesc: "Shoguns Hitlist of HorrorTerrors",abDesc:"Not even kidding, throw this into the Furthest Ring and never look back."))
            ..add(new Item("Wizard Statue",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.STONE, ItemTraitFactory.MAGICAL, ItemTraitFactory.BLUNT, ItemTraitFactory.FAKE],shogunDesc: "Petrified Shitty Wizard",abDesc:"Suprisingly magical, given that magic is a fake thing."))
            ..add(new Item("Mermaid Fountain",<ItemTrait>[ItemTraitFactory.UNCOMFORTABLE,ItemTraitFactory.CRYSTAL,ItemTraitFactory.MAGICAL, ItemTraitFactory.BLUNT, ItemTraitFactory.FAKE],shogunDesc: "Water Spitting Fish Woman Statue"));
    }

    @override
    void initializeThemes() {
        addTheme(new Theme(<String>["Monsters","Dragons","Fantasy", "Adventure", "Princesses", "Castles", "Wyverns","Wizards", "Elves", "Faeries"])
            ..addFeature(FeatureFactory.DRAGONCONSORT, Feature.WAY_HIGH)
            ..addFeature(FeatureFactory.MUSICSOUND, Feature.MEDIUM)
            ..addFeature(FeatureFactory.NATURESMELL, Feature.MEDIUM)
            ..addFeature(FeatureFactory.ZOOSMELL, Feature.LOW)
            ..addFeature(new PreDenizenQuestChain("Save the Beautiful Consort", [
                new Quest("The ${Quest.PLAYER1} learns of a Beautiful ${Quest.CONSORT} who has been kidnapped by the vial ${Quest.DENIZEN} Minion. There is a hefty reward should a brave Hero rescue them. "),
                new Quest(" The ${Quest.PLAYER1} journeys to the castle of the ${Quest.DENIZEN} Minion, only to discover that they way is barred by a giant iron lock. Only the correctly shaped ${Quest.PHYSICALMCGUFFIN} can open it. Looks like it's time to go questing."),
                new Quest("The ${Quest.PLAYER1} finally finds a correctly shaped.  ${Quest.PHYSICALMCGUFFIN}.  The gate swings open, and the ${Quest.DENIZEN} Minion is swiftly defeated. The Beautiful ${Quest.CONSORT} delivers a reward to the brave ${Quest.PLAYER1}. Convenient that they had it with them when they were kidnapped, huh?   "),
            ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);


        addTheme(new Theme(<String>["Vampires","Rainbows","Undead", "Counts", "Castles"])
            ..addFeature(FeatureFactory.DECEITSMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.BLOODSMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.FOOTSTEPSOUND, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CREEPYFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.SCREAMSSOUND, Feature.HIGH)
            ..addFeature(FeatureFactory.ROMANTICFEELING, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("Do not Drink...Wine.", [
                new Quest("The ${Quest.PLAYER1} recieves an invitation to dine at the remote castle of Count Feratu. No one ever sees this mysterious ${Quest.CONSORT} leave, and no one can remember the last time he received guests."),
                new Quest("The ${Quest.PLAYER1} attends the dinner. Count Feratu is an.... eccentric ${Quest.CONSORT}. He sure does like drinking dark red liquids! And being in dimly lit rooms. And telling you to ignore the blatant screams coming from the dungeon. Luckily it all turns out to be a wacky misunderstanding. Really, VAMPIRES are fakey fake bullshit."),
                new Quest(" The ${Quest.PLAYER1} sees Castle Feratu in the distance. The silhouette of a ${Quest.CONSORT} standing on a balcony suddenly morphs into a bat and flies away. Holy shit, maybe he really WAS a vampire!? But...he doesn't seem to be hurting anyone, so...live and let live, you guess. "),
            ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);

        //the sock ruse was a distaction
        addTheme(new Theme(<String>["Flying Saucers","Aliens","Martians", "UFOs", "Conspiracies"])
            ..addFeature(FeatureFactory.DECEITSMELL, Feature.HIGH)
            ..addFeature(FeatureFactory.OZONESMELL, Feature.MEDIUM)
            ..addFeature(FeatureFactory.CREEPYFEELING, Feature.HIGH)
            ..addFeature(FeatureFactory.GLAMOROUSFEELING, Feature.MEDIUM)
            ..addFeature(FeatureFactory.BEEPINGSOUND, Feature.MEDIUM)
            ..addFeature(FeatureFactory.PULSINGSOUND, Feature.MEDIUM)
            ..addFeature(new PreDenizenQuestChain("Expose the Conspiracy", [
                new Quest("The ${Quest.PLAYER1} finds a group of three ${Quest.CONSORT}s ${Quest.CONSORTSOUND}ing about how the Prospitian government SEEMS nice and friendly, but it's all a cover up!  Intrigued, the ${Quest.PLAYER1} learns of several conspiracies they have surpressed, not LEAST of which is the existance of ALIENS in the Medium. "),
                new Quest("The ${Quest.PLAYER1} does a daring mission at a local Prospitian embassy and uncovers all sorts of juicy secrets. They can't help but read some of them ahead of time and- oh. Oh I see. In retrospect, the players kind of ARE aliens to the Medium. This conspiracy is a lot less interesting now.  "),
                new Quest("The ${Quest.PLAYER1} shows the conspiracy papers to the three ${Quest.CONSORT}s, who fail to see the humor in the situation. They immediately try to rally their fellow ${Quest.CONSORT}s against the alien threat that is the foretold Players themselves. They...don't get even a single solitary ${Quest.CONSORTSOUND} of agreement from the crowd, though. Looks like they are stuck being the wacky conspiracy theorists. "),
            ], new RandomReward(), QuestChainFeature.defaultOption), Feature.WAY_LOW)
            ,  Theme.LOW);
    }

}