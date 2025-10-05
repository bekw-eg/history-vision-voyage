import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { saveUser, loginUser, loginAsGuest } from "@/utils/auth";
import { Eye, EyeOff, Globe2 } from "lucide-react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!formData.email || !formData.password) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    if (!isLogin && !formData.name) {
      toast({
        title: "Ошибка",
        description: "Укажите ваше имя",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Ошибка",
        description: "Пароль должен быть минимум 6 символов",
        variant: "destructive",
      });
      return;
    }

    if (isLogin) {
      // Вход
      const user = loginUser(formData.email, formData.password);
      if (user) {
        toast({
          title: "Добро пожаловать!",
          description: `Рады видеть вас снова, ${user.name}`,
        });
        navigate("/main");
      } else {
        toast({
          title: "Ошибка входа",
          description: "Неверный email или пароль",
          variant: "destructive",
        });
      }
    } else {
      // Регистрация
      const success = saveUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (success) {
        toast({
          title: "Регистрация успешна!",
          description: "Теперь войдите в систему",
        });
        setIsLogin(true);
        setFormData({ name: "", email: formData.email, password: "" });
      } else {
        toast({
          title: "Ошибка",
          description: "Пользователь с таким email уже существует",
          variant: "destructive",
        });
      }
    }
  };

  const handleGuestLogin = () => {
    loginAsGuest();
    toast({
      title: "Гостевой вход",
      description: "Добро пожаловать в HistoryVision!",
    });
    navigate("/main");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2 animate-float">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-glow">
              <Globe2 className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white">HistoryVision</h1>
          <p className="text-xl text-white/80">Путешествуй во времени с AR/VR</p>
        </div>

        <Card className="backdrop-blur-lg bg-white/90 shadow-glow border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">
              {isLogin ? "Вход в систему" : "Регистрация"}
            </CardTitle>
            <CardDescription className="text-center">
              {isLogin
                ? "Введите свои данные для входа"
                : "Создайте новый аккаунт"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Пароль</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Минимум 6 символов"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="bg-white pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full shadow-glow">
                {isLogin ? "Войти" : "Зарегистрироваться"}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">или</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGuestLogin}
              >
                Войти как гость
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-sm text-primary hover:underline"
                >
                  {isLogin
                    ? "Нет аккаунта? Зарегистрируйтесь"
                    : "Уже есть аккаунт? Войдите"}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-white/60 text-sm">
          Откройте для себя исторические места в 3D и виртуальной реальности
        </p>
      </div>
    </div>
  );
};

export default Login;
