import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { isAuthenticated, logoutUser, getCurrentUser } from "@/utils/auth";
import { places, Place } from "@/data/places";
import { Globe2, LogOut, Search, MapPin } from "lucide-react";

const Main = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(places);
  const currentUser = getCurrentUser();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = places.filter(
        (place) =>
          place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          place.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlaces(filtered);
    } else {
      setFilteredPlaces(places);
    }
  }, [searchQuery]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handlePlaceClick = (placeId: number) => {
    navigate(`/place/${placeId}`);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-xl shadow-glow">
              <Globe2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">HistoryVision</h1>
              <p className="text-sm text-muted-foreground">
                Добро пожаловать, {currentUser?.name}!
              </p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Выйти
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4 py-8">
            <h2 className="text-5xl font-bold text-white animate-float">
              Путешествуй во времени
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Исследуй 30 величайших достопримечательностей мира в виртуальной и
              дополненной реальности
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по названию или стране..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/90 backdrop-blur-sm h-12 text-lg shadow-glow"
              />
            </div>
          </div>

          {/* Places Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaces.map((place) => (
              <Card
                key={place.id}
                className="overflow-hidden backdrop-blur-sm bg-white/90 border-0 shadow-lg card-hover cursor-pointer group"
                onClick={() => handlePlaceClick(place.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 text-white text-sm">
                    <MapPin className="w-4 h-4" />
                    {place.country}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl gradient-text">
                    {place.name}
                  </CardTitle>
                  <CardDescription>{place.shortDescription}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full shadow-glow" size="sm">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPlaces.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white text-xl">
                Ничего не найдено. Попробуйте другой запрос.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 border-t border-white/20 backdrop-blur-lg bg-white/10">
        <div className="container mx-auto px-4 text-center text-white/80">
          <p>© 2024 HistoryVision. Путешествия во времени с AR/VR технологиями</p>
        </div>
      </footer>
    </div>
  );
};

export default Main;
