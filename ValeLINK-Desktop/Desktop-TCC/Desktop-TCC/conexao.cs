using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data;
using MySql.Data.MySqlClient;


namespace Estrutura_Projeto
{
    class conexao
    {
        //Variável para realização de conexão.
        public MySqlConnection conectar;
        public string servidor;
        //Variável para armazenar o endereço do servidor (local host/127.0.0.1) ou online
        //*online necessário saber o endereço do servidor.
        public string database;
        //database - Vase de Dados a ser criado futuramente.
        public string usuario;
        //usuario - Usuário padrão de acesso ao servidor de banco de dados - root.
        public string senha;
        //senha - Senha padrão de acesso ao servidor de banco de dados - "".

        //Criação Construtor
        public conexao()
        {
            inicializar();
        }

        //public e a visibilidade da função
        //a função inicializar estará disponível para todo projeto
        public void inicializar()
        {
            //Configurar a função inicializar
            servidor = "127.0.0.1";
            database = "tcc3etim";
            //C - Create
            //R - Read
            //U - Update
            //D - Delete
            usuario = "root";
            senha = "";
            string conexaostring;
            conexaostring = "SERVER= " + servidor + ";" + "DATABASE= " + database + ";" + "UID= " + usuario + ";" + "PASSWORD=" + senha + ";";
            //Valores em vermelho corresponde ao comando padrão de conexão.
            //Cada valor padrãoé preenchido com valor da variável.
            conectar = new MySqlConnection(conexaostring);
        }
        //Abrir data base
        //função do tipo bool - booleano (true / false)
        public bool abrirconexao()
        {
            //tratamento do erro - try
            try
            {
                //O que estiver dentro do 'try' deverá ser executado.
                conectar.Open();
                return true;
            }
            catch (MySqlException ex)
            {
                //O que estiuver dentro do catch e referente a mensagem de erro caso o try
                //não execute.
                switch (ex.Number)
                {
                    case 0:
                        System.Windows.Forms.MessageBox.Show("Não foi possível conectar");
                        break;
                    case 1045:
                        System.Windows.Forms.MessageBox.Show("Usuário a senha inválida! verifique");
                        break;
                }
                return false;

            }
        }
        public bool fecharconexao()
        {
            try
            {
                conectar.Close();
                return false;
            }
            catch (MySqlException ex)
            {
                System.Windows.Forms.MessageBox.Show(ex.Message);
                return false;
            }
        }
    }
}
