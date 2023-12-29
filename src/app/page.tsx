import {
  Button,
  Images,
  Input,
  Label,
  Links,
  Paragraphs,
  Titles,
} from '@/components/ui'
export default function Example() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Images
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8GIL2tnutYjNP3vP1E4OVKoYlWkZW770uw&usqp=CAU"
          title="Inicio de Sesion"
        />

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Titles>Inicia Sesion en tu Cuenta</Titles>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <Label htmlFor="name">Nombres</Label>
              <div className="mt-2">
                <Input
                  placeholder="Ingresa tus nombres"
                  type="text"
                  name="name"
                  id="name"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="apellidos">Apellidos</Label>
              <div className="mt-2">
                <Input
                  placeholder="Ingresa tus apellidos"
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="telefono">Telefono</Label>
              <div className="mt-2">
                <Input
                  placeholder="000-0000-000"
                  type="number"
                  name="telefono"
                  id="telefono"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <div className="mt-2">
                <Input
                  placeholder="Ingresa tu Email"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div className="text-sm">
                  <Links> Olvidaste tu password?</Links>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  placeholder="Ingresa tu password"
                  type="password"
                  name="pass"
                  id="pass"
                  required
                />
              </div>
            </div>

            <div>
              <Button type="submit">Iniciar</Button>
            </div>
          </form>
          <Paragraphs>
            Aun no eres miembro? &nbsp;
            <Links>Realiza una prueba de 30 dias</Links>
          </Paragraphs>
        </div>
      </div>
    </>
  )
}
